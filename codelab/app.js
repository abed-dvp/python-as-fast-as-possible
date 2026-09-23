'use strict';

const steps = window.CODELAB_STEPS;
const videoBase = 'https://www.youtube.com/watch?v=VchuKL44s6E&t=';
const storageKey = 'abed-codelab-python-state-v1';
const themeKey = 'abed-codelab-theme';

let currentIndex = 0;
let state = loadState();
let pythonWorker = null;
let pythonReady = false;
let requestCounter = 0;
const pendingRuns = new Map();

const els = {
  sidebar: document.getElementById('sidebar'),
  menuButton: document.getElementById('menuButton'),
  stepNav: document.getElementById('stepNav'),
  progressBar: document.getElementById('progressBar'),
  progressText: document.getElementById('progressText'),
  stepNumber: document.getElementById('stepNumber'),
  videoTime: document.getElementById('videoTime'),
  lessonTitle: document.getElementById('lessonTitle'),
  lessonIntro: document.getElementById('lessonIntro'),
  learnBullets: document.getElementById('learnBullets'),
  exampleCode: document.getElementById('exampleCode'),
  expectedOutput: document.getElementById('expectedOutput'),
  challengeText: document.getElementById('challengeText'),
  starterCode: document.getElementById('starterCode'),
  solutionPanel: document.getElementById('solutionPanel'),
  solutionCode: document.getElementById('solutionCode'),
  solutionButton: document.getElementById('solutionButton'),
  resetCode: document.getElementById('resetCode'),
  runPython: document.getElementById('runPython'),
  checkAnswer: document.getElementById('checkAnswer'),
  clearOutput: document.getElementById('clearOutput'),
  runOutput: document.getElementById('runOutput'),
  executionState: document.getElementById('executionState'),
  checkFeedback: document.getElementById('checkFeedback'),
  runtimeStatus: document.getElementById('runtimeStatus'),
  runtimeDot: document.getElementById('runtimeDot'),
  runtimeText: document.getElementById('runtimeText'),
  prevButton: document.getElementById('prevButton'),
  nextButton: document.getElementById('nextButton'),
  completeButton: document.getElementById('completeButton'),
  resetProgress: document.getElementById('resetProgress'),
  themeButton: document.getElementById('themeButton')
};

function initPythonWorker() {
  pythonWorker = new Worker('./python-worker.js');

  pythonWorker.addEventListener('message', function(event) {
    const data = event.data || {};

    if (data.type === 'ready') {
      pythonReady = true;
      els.runtimeDot.className = 'runtime-dot ready';
      els.runtimeText.textContent = 'Python ' + data.version + ' ready in browser';
      els.executionState.textContent = 'Ready';
      els.runOutput.textContent = 'Python is ready. Run your code.';
      els.runPython.disabled = false;
      els.checkAnswer.disabled = false;
      return;
    }

    if (data.type === 'boot-error') {
      pythonReady = false;
      els.runtimeDot.className = 'runtime-dot error';
      els.runtimeText.textContent = 'Python runtime failed to load';
      els.executionState.textContent = 'Runtime error';
      els.runOutput.textContent = data.error || 'Unable to load Python.';
      els.runOutput.classList.add('error-output');
      return;
    }

    if (data.type === 'result' || data.type === 'worker-error') {
      const pending = pendingRuns.get(data.requestId);
      if (!pending) return;
      pendingRuns.delete(data.requestId);
      pending.resolve(data);
    }
  });

  pythonWorker.addEventListener('error', function(event) {
    pythonReady = false;
    els.runtimeDot.className = 'runtime-dot error';
    els.runtimeText.textContent = 'Python runtime worker failed';
    els.executionState.textContent = 'Worker error';
    els.runOutput.textContent = event.message || 'Python worker error.';
    els.runOutput.classList.add('error-output');
  });
}

function executePython(code, testCode) {
  return new Promise(function(resolve, reject) {
    if (!pythonReady || !pythonWorker) {
      reject(new Error('Python runtime is still loading.'));
      return;
    }

    const requestId = ++requestCounter;
    pendingRuns.set(requestId, { resolve, reject });

    pythonWorker.postMessage({
      type: 'execute',
      requestId,
      code,
      testCode: testCode || ''
    });
  });
}

function setRunning(isRunning, label) {
  els.runPython.disabled = isRunning || !pythonReady;
  els.checkAnswer.disabled = isRunning || !pythonReady;
  els.executionState.textContent = label || (isRunning ? 'Running…' : 'Ready');
}

function formatExecution(result) {
  const parts = [];
  if (result.output) parts.push(result.output.replace(/\s+$/, ''));
  if (result.error) parts.push(result.error);
  return parts.join('\n') || '(no output)';
}

function clearFeedback() {
  els.checkFeedback.hidden = true;
  els.checkFeedback.className = 'check-feedback';
  els.checkFeedback.textContent = '';
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return {
      completed: parsed.completed || {},
      code: parsed.code || {}
    };
  } catch {
    return { completed: {}, code: {} };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function secondsFromTimestamp(value) {
  const parts = value.split(':').map(Number);
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return parts[0] * 3600 + parts[1] * 60 + parts[2];
}

function renderNav() {
  els.stepNav.innerHTML = '';
  steps.forEach(function(step, index) {
    const button = document.createElement('button');
    button.className = 'step-link';
    if (index === currentIndex) button.classList.add('active');
    if (state.completed[step.id]) button.classList.add('complete');

    const marker = state.completed[step.id] ? '✓' : String(step.id);
    button.innerHTML =
      '<span class="step-index">' + marker + '</span>' +
      '<span class="step-title">' + escapeHtml(step.title) + '</span>' +
      '<span class="step-time">' + escapeHtml(step.time) + '</span>';

    button.addEventListener('click', function() {
      saveCurrentCode();
      currentIndex = index;
      render();
      els.sidebar.classList.remove('open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    els.stepNav.appendChild(button);
  });
}

function renderLesson() {
  const step = steps[currentIndex];
  els.stepNumber.textContent = 'Step ' + step.id + ' of ' + steps.length;
  els.videoTime.textContent = 'Video ' + step.time + ' ↗';
  els.videoTime.href = videoBase + secondsFromTimestamp(step.time) + 's';
  els.lessonTitle.textContent = step.title;
  els.lessonIntro.textContent = step.learn;

  els.learnBullets.innerHTML = '';
  step.bullets.forEach(function(item) {
    const li = document.createElement('li');
    li.textContent = item;
    els.learnBullets.appendChild(li);
  });

  els.exampleCode.textContent = step.example;
  els.expectedOutput.textContent = step.output;
  els.challengeText.textContent = step.challenge;
  els.solutionCode.textContent = step.solution;
  els.takeawayText = document.getElementById('takeawayText');
  els.takeawayText.textContent = step.takeaway;

  const saved = state.code[step.id];
  els.starterCode.value = typeof saved === 'string' ? saved : step.starter;

  els.solutionPanel.hidden = true;
  els.solutionButton.textContent = 'Show solution';
  clearFeedback();
  els.runOutput.classList.remove('error-output');
  els.runOutput.textContent = pythonReady ? 'Run your Python code to see the output.' : 'Python runtime is loading…';
  els.executionState.textContent = pythonReady ? 'Ready' : 'Loading Python…';

  els.prevButton.disabled = currentIndex === 0;
  els.nextButton.disabled = currentIndex === steps.length - 1;

  const done = Boolean(state.completed[step.id]);
  els.completeButton.textContent = done ? 'Completed ✓' : 'Mark step complete';
  els.completeButton.classList.toggle('completed', done);
}

function renderProgress() {
  const completed = steps.filter(function(step) { return state.completed[step.id]; }).length;
  const percent = Math.round((completed / steps.length) * 100);
  els.progressBar.style.width = percent + '%';
  els.progressText.textContent = completed + ' of ' + steps.length + ' complete · ' + percent + '%';
}

function render() {
  renderNav();
  renderLesson();
  renderProgress();
}

function saveCurrentCode() {
  const step = steps[currentIndex];
  state.code[step.id] = els.starterCode.value;
  saveState();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

els.starterCode.addEventListener('input', saveCurrentCode);

els.runPython.addEventListener('click', async function() {
  clearFeedback();
  saveCurrentCode();
  setRunning(true, 'Running…');
  els.runOutput.classList.remove('error-output');
  els.runOutput.textContent = 'Running Python…';

  try {
    const response = await executePython(els.starterCode.value, '');
    if (response.type === 'worker-error') throw new Error(response.error);

    const result = response.result;
    els.runOutput.textContent = formatExecution(result);
    els.runOutput.classList.toggle('error-output', Boolean(result.error));
    els.executionState.textContent = result.error ? 'Finished with error' : 'Finished';
  } catch (error) {
    els.runOutput.textContent = error.message || String(error);
    els.runOutput.classList.add('error-output');
    els.executionState.textContent = 'Run failed';
  } finally {
    setRunning(false);
  }
});

els.checkAnswer.addEventListener('click', async function() {
  const step = steps[currentIndex];
  clearFeedback();
  saveCurrentCode();
  setRunning(true, 'Checking…');
  els.runOutput.classList.remove('error-output');
  els.runOutput.textContent = 'Running Python and checking your answer…';

  try {
    const response = await executePython(els.starterCode.value, step.check || '');
    if (response.type === 'worker-error') throw new Error(response.error);

    const result = response.result;
    els.runOutput.textContent = formatExecution(result);
    els.runOutput.classList.toggle('error-output', Boolean(result.error));

    let passed = false;
    let feedback = '';

    if (step.expectedError) {
      passed = result.error_type === step.expectedError;
      feedback = passed
        ? 'Correct — your code raised ' + step.expectedError + '.'
        : 'Not yet — expected ' + step.expectedError + ', but got ' + (result.error_type || 'no error') + '.';
    } else if (result.error) {
      feedback = 'Your code raised ' + result.error_type + '. Fix the error and try again.';
    } else if (result.test_error) {
      feedback = result.test_error.replace(/^AssertionError:\s*/, '') || 'The result does not pass the exercise checks yet.';
    } else if (step.check) {
      passed = true;
      feedback = 'Correct — your code passes the checks.';
    } else {
      passed = true;
      feedback = 'Code ran successfully.';
    }

    els.checkFeedback.hidden = false;
    els.checkFeedback.className = 'check-feedback ' + (passed ? 'success' : 'failure');
    els.checkFeedback.textContent = feedback;
    els.executionState.textContent = passed ? 'Check passed' : 'Check failed';

    if (passed) {
      state.completed[step.id] = true;
      saveState();
      renderNav();
      renderProgress();
      els.completeButton.textContent = 'Completed ✓';
      els.completeButton.classList.add('completed');
    }
  } catch (error) {
    els.runOutput.textContent = error.message || String(error);
    els.runOutput.classList.add('error-output');
    els.executionState.textContent = 'Check failed';
  } finally {
    setRunning(false);
  }
});

els.clearOutput.addEventListener('click', function() {
  clearFeedback();
  els.runOutput.classList.remove('error-output');
  els.runOutput.textContent = pythonReady ? 'Output cleared. Run your code again.' : 'Python runtime is loading…';
  els.executionState.textContent = pythonReady ? 'Ready' : 'Loading Python…';
});

els.resetCode.addEventListener('click', function() {
  const step = steps[currentIndex];
  els.starterCode.value = step.starter;
  state.code[step.id] = step.starter;
  saveState();
});

els.solutionButton.addEventListener('click', function() {
  const opening = els.solutionPanel.hidden;
  els.solutionPanel.hidden = !opening;
  els.solutionButton.textContent = opening ? 'Hide solution' : 'Show solution';
});

els.prevButton.addEventListener('click', function() {
  if (currentIndex === 0) return;
  saveCurrentCode();
  currentIndex -= 1;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

els.nextButton.addEventListener('click', function() {
  if (currentIndex >= steps.length - 1) return;
  saveCurrentCode();
  currentIndex += 1;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

els.completeButton.addEventListener('click', function() {
  const step = steps[currentIndex];
  state.completed[step.id] = !state.completed[step.id];
  saveState();
  render();
});

els.resetProgress.addEventListener('click', function() {
  const confirmed = window.confirm('Reset completion progress and practice code for all 25 steps?');
  if (!confirmed) return;
  state = { completed: {}, code: {} };
  saveState();
  render();
});

els.menuButton.addEventListener('click', function() {
  els.sidebar.classList.toggle('open');
});

document.addEventListener('click', function(event) {
  const copy = event.target.closest('[data-copy]');
  if (!copy) return;
  const target = document.getElementById(copy.getAttribute('data-copy'));
  if (!target) return;

  navigator.clipboard.writeText(target.textContent).then(function() {
    const original = copy.textContent;
    copy.textContent = 'Copied';
    setTimeout(function() { copy.textContent = original; }, 900);
  });
});

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(themeKey, theme);
}

const savedTheme = localStorage.getItem(themeKey);
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark');
}

els.themeButton.addEventListener('click', function() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

initPythonWorker();
render();
