const PYODIDE_BASE = new URL('./vendor/pyodide/', self.location.href).href;

let pyodide = null;

async function boot() {
  try {
    // Work around JSPI instability seen on some recent Chromium/Windows builds.
    // This Codelab executes Python synchronously inside a dedicated Worker,
    // so disabling JSPI does not block the page UI.
    try {
      if (typeof WebAssembly !== 'undefined' && WebAssembly.Suspending) {
        delete WebAssembly.Suspending;
        delete WebAssembly.promising;
      }
    } catch {}

    const moduleURL = new URL('./vendor/pyodide/pyodide.mjs', self.location.href).href;
    const { loadPyodide } = await import(moduleURL);

    pyodide = await loadPyodide({
      indexURL: PYODIDE_BASE,
      enableRunUntilComplete: false
    });

    pyodide.setStdin({ error: true });

    pyodide.runPython(`
import ast
import contextlib
import io
import json
import traceback

def __abed_run(code, test_code=""):
    namespace = {"__name__": "__main__"}
    stdout = io.StringIO()
    error_type = None
    error_text = ""
    test_error = ""

    try:
        tree = ast.parse(code, filename="<learner>", mode="exec")

        with contextlib.redirect_stdout(stdout), contextlib.redirect_stderr(stdout):
            if tree.body and isinstance(tree.body[-1], ast.Expr):
                last_expr = tree.body.pop()

                if tree.body:
                    exec(compile(tree, "<learner>", "exec"), namespace)

                value = eval(
                    compile(ast.Expression(last_expr.value), "<learner>", "eval"),
                    namespace,
                )

                if value is not None:
                    print(repr(value))
            else:
                exec(compile(tree, "<learner>", "exec"), namespace)

    except BaseException as exc:
        error_type = type(exc).__name__
        error_text = "".join(
            traceback.format_exception_only(type(exc), exc)
        ).strip()

    namespace["__output__"] = stdout.getvalue()

    if test_code and error_type is None:
        try:
            exec(compile(test_code, "<checks>", "exec"), namespace)
        except BaseException as exc:
            test_error = "".join(
                traceback.format_exception_only(type(exc), exc)
            ).strip()

    return {
        "output": stdout.getvalue(),
        "error_type": error_type,
        "error": error_text,
        "test_error": test_error,
    }
`);

    const version = pyodide.runPython('import sys; sys.version.split()[0]');
    self.postMessage({ type: 'ready', version: String(version) });
  } catch (error) {
    self.postMessage({
      type: 'boot-error',
      error: error instanceof Error ? error.message : String(error)
    });
  }
}

self.addEventListener('message', async function(event) {
  if (!pyodide || event.data.type !== 'execute') return;

  const { requestId, code, testCode } = event.data;

  try {
    pyodide.globals.set('__abed_user_code', code);
    pyodide.globals.set('__abed_test_code', testCode || '');

    const jsonResult = pyodide.runPython(
      'json.dumps(__abed_run(__abed_user_code, __abed_test_code))'
    );

    self.postMessage({
      type: 'result',
      requestId,
      result: JSON.parse(String(jsonResult))
    });
  } catch (error) {
    self.postMessage({
      type: 'worker-error',
      requestId,
      error: error instanceof Error ? error.message : String(error)
    });
  } finally {
    try {
      pyodide.globals.delete('__abed_user_code');
      pyodide.globals.delete('__abed_test_code');
    } catch {}
  }
});

boot();
