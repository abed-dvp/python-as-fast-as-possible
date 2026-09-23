# Abed Codelab

A browser-based, self-paced version of the Python 101 material in this repository.

## Features

- 25 steps matching the course/video order
- Learn → Example → Try it → Solution → Key takeaway flow
- Editable practice code
- **Real Python execution in the browser with Pyodide/WebAssembly**
- Run Python and see stdout/errors immediately
- Automated `Check answer` tests for exercises
- Revealable solutions
- Previous / Next navigation
- Completion tracking and progress
- Local progress saved in the browser
- Light / dark mode
- Responsive layout

## Run locally

From the repository root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/codelab/
```

No build step or external JavaScript framework is required. The first visit loads the Pyodide Python runtime from jsDelivr; after the runtime is ready, exercises execute client-side in the browser.

## Source

The learning sequence follows the repository's Python 101 material, which is based on the topic order of Tech With Tim's **Python As Fast As Possible – Learn Python in ~75 Minutes**.


## How execution works

The Codelab uses **Pyodide**, which compiles CPython to WebAssembly. Learner code runs inside a dedicated Web Worker so the page UI remains responsive.

For each exercise:

1. Write Python in the editor.
2. Click **Run Python** to execute it.
3. Read real stdout or Python errors in the terminal.
4. Click **Check answer** to run the exercise's validation tests.
5. A passing check marks the step complete.

This is real Python execution, not a JavaScript syntax simulation.
