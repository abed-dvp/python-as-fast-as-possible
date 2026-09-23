'use strict';

const steps = window.CODELAB_STEPS;
const videoBase = 'https://www.youtube.com/watch?v=VchuKL44s6E&t=';
const storageKey = 'abed-codelab-python-state-v1';
const themeKey = 'abed-codelab-theme';

let currentIndex = 0;
let state = loadState();

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
  prevButton: document.getElementById('prevButton'),
  nextButton: document.getElementById('nextButton'),
  completeButton: document.getElementById('completeButton'),
  resetProgress: document.getElementById('resetProgress'),
  themeButton: document.getElementById('themeButton')
};

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

render();
