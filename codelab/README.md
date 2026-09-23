# Abed Codelab

A browser-based, self-paced Python 101 learning experience with real Python execution.

**Live:** https://abed-dvp.github.io/python-as-fast-as-possible/

## Features

- 25 steps matching the course/video order
- Learn → Example → Try it → Solution → Key takeaway flow
- Editable Python exercises
- **Real Python execution with Pyodide / WebAssembly**
- stdout and Python error output
- Automated **Check answer** validation
- Passing checks automatically complete a step
- Revealable solutions
- Previous / Next navigation
- Completion tracking and progress
- Progress and learner code saved in `localStorage`
- Light / dark mode
- Responsive layout

## How Python execution works

The Codelab uses **Pyodide**, which runs CPython in the browser through WebAssembly.

The final deployment architecture is intentionally simple:

1. GitHub Actions builds the static site.
2. During the build, the workflow downloads the required Pyodide runtime files.
3. Those files are included in the GitHub Pages artifact under `codelab/vendor/pyodide/`.
4. The browser loads Pyodide from the same `abed-dvp.github.io` origin.
5. `app.js` initializes the runtime with `loadPyodide()`.
6. Learner code executes client-side in the browser.
7. **Check answer** runs Python assertions against the learner's result.

There is **no Python backend** and no JavaScript syntax simulation.

## Exercise flow

For each step:

1. Read the concept and example.
2. Write or edit Python in the practice editor.
3. Click **Run Python** to execute the code.
4. Inspect stdout or the Python error.
5. Click **Check answer** to run the exercise validation.
6. A passing check marks the step complete.

## Deployment

GitHub Pages deployment is defined in:

```text
.github/workflows/pages.yml
```

The workflow creates a static `_site` artifact, adds the required Pyodide runtime files, and deploys the result to GitHub Pages.

The Pyodide runtime is **not committed to the repository**. It is generated as part of the deployment build.

## Local development

The HTML/CSS/JavaScript source is fully static, but the Python runtime files under `codelab/vendor/pyodide/` are created during deployment.

Because of that, simply running:

```bash
python -m http.server 8000
```

from a fresh clone is enough to inspect the UI, but Python execution will not initialize unless the Pyodide vendor files have also been created locally.

For normal learning and portfolio use, the GitHub Pages version is the canonical runnable build:

https://abed-dvp.github.io/python-as-fast-as-possible/

## Current runtime constraints

The Codelab is designed for short educational snippets.

- `input()` does not currently provide an interactive prompt UI.
- Infinite loops or very long-running code can block the page.
- Progress is stored in the current browser only.

These are acceptable for the current 25 exercises, which are intentionally short and do not require interactive stdin.

## Source

The learning sequence follows the repository's Python 101 material and the topic order of Tech With Tim's **Python As Fast As Possible – Learn Python in ~75 Minutes**.

The lesson text, examples, exercises, and validation logic in this repository are independently written.
