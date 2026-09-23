# Python As Fast as Possible

A compact, hands-on Python fundamentals repository following the learning sequence of Tech With Tim's **Python As Fast as Possible – Learn Python in ~75 Minutes**.

> Source video: https://www.youtube.com/watch?v=VchuKL44s6E
>
> The explanations and examples in this repository are independently written and lightly modernized for current Python 3. The repository follows the video's topic order rather than reproducing its transcript.

## Topics

| # | Topic | Video timestamp |
|---|---|---:|
| 1 | Setup & Installation | 00:40 |
| 2 | Core Data Types | 03:03 |
| 3 | Output & Printing | 04:57 |
| 4 | Variables | 07:32 |
| 5 | User Input & Type Conversion | 10:20 |
| 6 | Arithmetic Operators | 12:38 |
| 7 | String Methods | 18:34 |
| 8 | Comparison Operators | 22:19 |
| 9 | Chained Conditionals | 28:10 |
| 10 | If / Elif / Else | 31:26 |
| 11 | Lists & Tuples | 35:41 |
| 12 | For Loops | 41:32 |
| 13 | While Loops | 46:02 |
| 14 | Slicing | 47:33 |
| 15 | Sets | 50:46 |
| 16 | Dictionaries | 54:29 |
| 17 | Comprehensions | 57:40 |
| 18 | Functions | 1:00:33 |
| 19 | `*args`, `**kwargs` & Unpacking | 1:03:12 |
| 20 | Scope & `global` | 1:09:12 |
| 21 | Exceptions | 1:10:42 |
| 22 | Handling Exceptions | 1:11:28 |
| 23 | Lambda Functions | 1:13:08 |
| 24 | `map()` & `filter()` | 1:14:19 |
| 25 | F-Strings | 1:17:30 |

## Repository structure

```text
python-as-fast-as-possible/
├── README.md
├── notebook.ipynb
├── main.py
├── pyproject.toml
├── .python-version
└── .gitignore
```

## How to use

### Option 1 — Run the Python file

```bash
python main.py
```

### Option 2 — Work through the notebook

```bash
python -m venv .venv
```

Activate the environment, then install the notebook dependency:

```bash
pip install -e '.[notebook]'
jupyter lab
```

Open `notebook.ipynb` and run the cells from top to bottom.

## Recommended learning approach

1. Watch one section of the video.
2. Run the matching notebook cells yourself.
3. Change the values and predict the output before executing.
4. Re-type the key examples instead of only reading them.
5. Use `main.py` as a quick refresher after finishing the notebook.

## Python version

The original video was recorded in 2020 and targets Python 3.6+. This repository uses **Python 3.11+** and current Python syntax.

## Credits

Course sequence inspired by Tech With Tim's video: **Python As Fast as Possible – Learn Python in ~75 Minutes**.
