# 🐍 Python 101 — Learn Python As Fast As Possible

A compact, hands-on guide to the core Python concepts you need to start writing real programs.

This repository follows the learning sequence of Tech With Tim's **Python As Fast as Possible – Learn Python in ~75 Minutes**, while using independently written examples and modern Python 3 syntax.

> 🎥 Source video: https://www.youtube.com/watch?v=VchuKL44s6E  
> 📓 Prefer practicing interactively? Open [`notebook.ipynb`](./notebook.ipynb).

---

## 📚 What You'll Learn

By the end of this tutorial, you'll understand:

- Python's main data types
- Variables and type conversion
- Arithmetic and comparison operators
- Boolean logic and conditionals
- Lists, tuples, sets, and dictionaries
- `for` and `while` loops
- Slicing and comprehensions
- Functions, `*args`, `**kwargs`, and unpacking
- Scope
- Exceptions
- Lambda functions
- `map()`, `filter()`
- F-strings

---

## 1. ⚙️ Setup & Installation — `00:40`

Check that Python is installed:

```bash
python --version
```

You should see Python 3 installed, for example:

```text
Python 3.11.9
```

You can run Python code in:

- a `.py` file
- the Python interpreter
- VS Code
- Jupyter Notebook / JupyterLab

This repository targets **Python 3.11+**.

---

## 2. 🧱 Core Data Types — `03:03`

Python has several built-in data types. Four of the most important are:

```python
integer_value = 10
float_value = 3.14
string_value = "Python"
boolean_value = True

print(type(integer_value))
print(type(float_value))
print(type(string_value))
print(type(boolean_value))
```

**Output:**

```text
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
```

### Key idea

- `int` → whole numbers
- `float` → decimal numbers
- `str` → text
- `bool` → `True` or `False`

---

## 3. 🖨️ Output & Printing — `04:57`

Use `print()` to display values.

```python
print("Hello, World!")
print(4.5, "hello", 87, False)
```

**Output:**

```text
Hello, World!
4.5 hello 87 False
```

You can customize the separator and ending:

```python
print("A", "B", "C", sep=" | ", end=" <-- done\n")
```

**Output:**

```text
A | B | C <-- done
```

---

## 4. 📦 Variables — `07:32`

Variables are names that reference values.

```python
name = "Abed"
age = 30
is_learning = True

print(name)
print(age)
print(is_learning)
```

Python does not require you to declare a variable's type.

A variable can even be rebound to another type:

```python
age = 30
age = "thirty"

print(age)
```

**Output:**

```text
thirty
```

---

## 5. ⌨️ User Input & Type Conversion — `10:20`

`input()` always returns a string.

```python
age = input("How old are you? ")
print(type(age))
```

Even if the user types `30`, the result is still a `str`.

Convert it when you need a number:

```python
age = int("30")
print(age + 1)
```

**Output:**

```text
31
```

Common conversions:

```python
int("42")
float("3.5")
str(100)
bool(1)
```

---

## 6. ➕ Arithmetic Operators — `12:38`

Python supports the standard arithmetic operators plus a few very useful ones.

```python
x = 10
y = 3

print(x + y)
print(x - y)
print(x * y)
print(x / y)
print(x // y)
print(x % y)
print(x ** y)
```

**Output:**

```text
13
7
30
3.3333333333333335
3
1
1000
```

### Operator reference

| Operator | Meaning |
|---|---|
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `//` | Floor division |
| `%` | Remainder |
| `**` | Exponentiation |

Parentheses control evaluation order:

```python
result = (10 + 5) * 2
print(result)
```

**Output:**

```text
30
```

---

## 7. 🔤 String Operations & Methods — `18:34`

Strings are sequences of characters.

```python
text = "  Hello Python  "

print(text.lower())
print(text.upper())
print(text.strip())
print(text.replace("Python", "World"))
```

**Output:**

```text
  hello python  
  HELLO PYTHON  
Hello Python
  Hello World  
```

Useful operations:

```python
language = "Python"

print(len(language))
print(language[0])
print("Py" in language)
```

**Output:**

```text
6
P
True
```

### Important

Strings are **immutable**. Methods such as `.upper()` return a new string rather than modifying the original one.

---

## 8. ⚖️ Comparison Operators — `22:19`

Comparisons return `True` or `False`.

```python
print(10 == 10)
print(10 != 5)
print(10 > 5)
print(10 < 5)
print(10 >= 10)
print(5 <= 10)
```

**Output:**

```text
True
True
True
False
True
True
```

### Comparison reference

| Operator | Meaning |
|---|---|
| `==` | Equal |
| `!=` | Not equal |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |

---

## 9. 🔗 Boolean Logic / Chained Conditionals — `28:10`

Use `and`, `or`, and `not` to combine boolean expressions.

```python
age = 25
has_ticket = True

print(age >= 18 and has_ticket)
print(age < 18 or has_ticket)
print(not has_ticket)
```

**Output:**

```text
True
True
False
```

### How they work

- `and` → both conditions must be true
- `or` → at least one condition must be true
- `not` → reverses a boolean value

---

## 10. 🚦 If / Elif / Else — `31:26`

Conditionals control which code runs.

```python
temperature = 18

if temperature >= 25:
    print("Warm")
elif temperature >= 15:
    print("Mild")
else:
    print("Cold")
```

**Output:**

```text
Mild
```

Python uses **indentation** to define blocks of code.

---

## 11. 📋 Lists & Tuples — `35:41`

### Lists

Lists are ordered and mutable.

```python
items = [4, True, "hello"]

items.append("new")
items[0] = 99

print(items)
```

**Output:**

```text
[99, True, 'hello', 'new']
```

Useful list operations:

```python
numbers = [1, 2, 3]

numbers.append(4)
numbers.extend([5, 6])
removed = numbers.pop()

print(numbers)
print(removed)
```

**Output:**

```text
[1, 2, 3, 4, 5]
6
```

### Tuples

Tuples are ordered but immutable.

```python
coordinates = (52.52, 13.405)

print(coordinates[0])
```

**Output:**

```text
52.52
```

You cannot do this:

```python
# coordinates[0] = 1
```

That would raise a `TypeError`.

### Mutability matters

```python
x = [1, 2, 3]
y = x

x[0] = 99

print(y)
```

**Output:**

```text
[99, 2, 3]
```

Both variables reference the same list.

To create a shallow copy:

```python
y = x.copy()
```

---

## 12. 🔁 For Loops — `41:32`

A `for` loop iterates over an iterable.

```python
for i in range(1, 4):
    print(i)
```

**Output:**

```text
1
2
3
```

You can loop over strings:

```python
for character in "Python":
    print(character)
```

Or get both index and value with `enumerate()`:

```python
names = ["Ada", "Guido", "Grace"]

for index, name in enumerate(names):
    print(index, name)
```

**Output:**

```text
0 Ada
1 Guido
2 Grace
```

---

## 13. 🔄 While Loops — `46:02`

A `while` loop repeats while a condition is true.

```python
count = 0

while count < 3:
    print(count)
    count += 1
```

**Output:**

```text
0
1
2
```

### Important

Make sure the loop condition eventually becomes false, otherwise you create an infinite loop.

---

## 14. ✂️ Slicing — `47:33`

Slicing extracts part of a sequence.

General syntax:

```python
sequence[start:stop:step]
```

Example:

```python
numbers = list(range(9))

print(numbers[2:5])
print(numbers[:4])
print(numbers[::2])
print(numbers[::-1])
```

**Output:**

```text
[2, 3, 4]
[0, 1, 2, 3]
[0, 2, 4, 6, 8]
[8, 7, 6, 5, 4, 3, 2, 1, 0]
```

The `stop` index is excluded.

Slicing also works with strings:

```python
text = "hello"
print(text[::-1])
```

**Output:**

```text
olleh
```

---

## 15. 🧩 Sets — `50:46`

Sets store **unique values**.

```python
values = {1, 2, 2, 3, 3, 3}

print(values)
```

**Output:**

```text
{1, 2, 3}
```

> Set display order should not be relied on.

Common operations:

```python
left = {1, 2, 3}
right = {3, 4, 5}

print(left | right)
print(left & right)
```

**Output:**

```text
{1, 2, 3, 4, 5}
{3}
```

- `|` → union
- `&` → intersection

Create an empty set with:

```python
empty_set = set()
```

Not with `{}`, because `{}` creates an empty dictionary.

---

## 16. 🗂️ Dictionaries — `54:29`

Dictionaries store **key-value pairs**.

```python
person = {
    "name": "Abed",
    "city": "Berlin",
    "skills": ["Python", "SQL"]
}

print(person["name"])
print(person["city"])
```

**Output:**

```text
Abed
Berlin
```

Add or update values:

```python
person["language"] = "Persian"
person["city"] = "Berlin, Germany"
```

Safely read a key with `.get()`:

```python
print(person.get("country", "Unknown"))
```

**Output:**

```text
Unknown
```

Loop through key-value pairs:

```python
for key, value in person.items():
    print(key, value)
```

---

## 17. ⚡ Comprehensions — `57:40`

Comprehensions create collections concisely.

### List comprehension

```python
squares = [i ** 2 for i in range(5)]
print(squares)
```

**Output:**

```text
[0, 1, 4, 9, 16]
```

Add a condition:

```python
even_numbers = [i for i in range(10) if i % 2 == 0]
print(even_numbers)
```

**Output:**

```text
[0, 2, 4, 6, 8]
```

Dictionary comprehension:

```python
mapping = {i: i ** 2 for i in range(4)}
print(mapping)
```

**Output:**

```text
{0: 0, 1: 1, 2: 4, 3: 9}
```

---

## 18. 🧰 Functions — `1:00:33`

Functions package reusable logic.

```python
def multiply(x, y):
    return x * y

result = multiply(5, 6)
print(result)
```

**Output:**

```text
30
```

Functions can return multiple values:

```python
def calculate(x, y):
    return x * y, x / y

product, quotient = calculate(10, 2)

print(product)
print(quotient)
```

**Output:**

```text
20
5.0
```

Default parameters:

```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Abed"))
print(greet("Abed", "Hi"))
```

**Output:**

```text
Hello, Abed!
Hi, Abed!
```

---

## 19. 📦 `*args`, `**kwargs` & Unpacking — `1:03:12`

### `*args`

Collects extra positional arguments into a tuple.

```python
def show_args(*args):
    print(args)

show_args(1, 2, 3)
```

**Output:**

```text
(1, 2, 3)
```

### `**kwargs`

Collects extra keyword arguments into a dictionary.

```python
def show_kwargs(**kwargs):
    print(kwargs)

show_kwargs(language="Python", level="beginner")
```

**Output:**

```text
{'language': 'Python', 'level': 'beginner'}
```

### Unpacking

```python
def add(x, y):
    return x + y

numbers = [4, 5]
print(add(*numbers))
```

**Output:**

```text
9
```

Dictionary unpacking:

```python
def greet(name, greeting):
    return f"{greeting}, {name}!"

values = {
    "name": "Abed",
    "greeting": "Welcome"
}

print(greet(**values))
```

**Output:**

```text
Welcome, Abed!
```

---

## 20. 🎯 Scope & `global` — `1:09:12`

Variables created inside a function normally belong to that function's local scope.

```python
message = "global"

def show_message():
    local_message = "local"
    print(message)
    print(local_message)

show_message()
```

**Output:**

```text
global
local
```

To reassign a global variable inside a function:

```python
counter = 0

def increment():
    global counter
    counter += 1

increment()
print(counter)
```

**Output:**

```text
1
```

### Best practice

In most real programs, prefer returning values rather than modifying global state.

---

## 21. 💥 Exceptions — `1:10:42`

An exception is an error that occurs while the program is running.

For example:

```python
int("hello")
```

Raises:

```text
ValueError
```

Other common exceptions include:

- `TypeError`
- `IndexError`
- `KeyError`
- `ZeroDivisionError`
- `FileNotFoundError`

---

## 22. 🛡️ Handling Exceptions — `1:11:28`

Use `try` and `except` when an error is expected and you know how to handle it.

```python
try:
    number = int("hello")
except ValueError:
    print("That is not a valid integer.")
```

**Output:**

```text
That is not a valid integer.
```

A more complete structure:

```python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Cannot divide by zero.")
else:
    print(result)
finally:
    print("Finished.")
```

**Output:**

```text
5.0
Finished.
```

### Good practice

Catch specific exceptions rather than using a broad `except:`.

---

## 23. λ Lambda Functions — `1:13:08`

A lambda is a small anonymous function containing a single expression.

```python
square = lambda x: x ** 2

print(square(5))
```

**Output:**

```text
25
```

Multiple parameters:

```python
add = lambda x, y: x + y

print(add(3, 4))
```

**Output:**

```text
7
```

For complex logic, a normal `def` function is usually clearer.

---

## 24. 🗺️ `map()` & `filter()` — `1:14:19`

### `map()`

Applies a function to every item.

```python
numbers = [1, 2, 3, 4]

doubled = list(map(lambda x: x * 2, numbers))

print(doubled)
```

**Output:**

```text
[2, 4, 6, 8]
```

### `filter()`

Keeps items that satisfy a condition.

```python
numbers = [1, 2, 3, 4, 5, 6]

even = list(filter(lambda x: x % 2 == 0, numbers))

print(even)
```

**Output:**

```text
[2, 4, 6]
```

Equivalent list comprehensions are often easier to read:

```python
doubled = [x * 2 for x in numbers]
even = [x for x in numbers if x % 2 == 0]
```

---

## 25. ✨ F-Strings — `1:17:30`

F-strings are the modern and readable way to insert values into strings.

```python
name = "Abed"
completed = 25

print(f"{name} completed {completed} Python topics.")
```

**Output:**

```text
Abed completed 25 Python topics.
```

You can put expressions directly inside the braces:

```python
x = 6
y = 8

print(f"{x} + {y} = {x + y}")
```

**Output:**

```text
6 + 8 = 14
```

Formatting numbers:

```python
pi = 3.14159265

print(f"{pi:.2f}")
```

**Output:**

```text
3.14
```

---

# 🧠 Quick Python Cheat Sheet

```python
# Variable
name = "Abed"

# List
numbers = [1, 2, 3]

# Dictionary
person = {"name": "Abed", "city": "Berlin"}

# Conditional
if len(numbers) > 2:
    print("More than two values")

# Loop
for number in numbers:
    print(number)

# Function
def double(x):
    return x * 2

# Comprehension
doubled = [double(x) for x in numbers]

# Exception handling
try:
    value = int("42")
except ValueError:
    value = 0

# F-string
print(f"Result: {doubled}")
```

---

# 📁 Repository Structure

```text
python-as-fast-as-possible/
├── README.md          # Complete tutorial / cheat sheet
├── notebook.ipynb     # Interactive practice notebook
├── main.py            # Runnable refresher
├── pyproject.toml     # Project configuration
├── .python-version
└── .gitignore
```

---

# ▶️ Run the Project

Clone the repository:

```bash
git clone https://github.com/abed-dvp/python-as-fast-as-possible.git
cd python-as-fast-as-possible
```

Run the Python refresher:

```bash
python main.py
```

Or create a virtual environment:

```bash
python -m venv .venv
```

Install Jupyter support:

```bash
pip install -e '.[notebook]'
jupyter lab
```

Then open:

```text
notebook.ipynb
```

---

# 🎯 Recommended Learning Method

For each topic:

1. Watch the matching section of the video.
2. Read the short explanation in this README.
3. Type the example yourself.
4. Predict the output before running it.
5. Change the values and test what happens.
6. Re-create the concept later without looking.

The goal is not to memorize syntax. The goal is to become comfortable enough with the syntax that you can use it while solving real problems.

---

# 📌 Topic Timeline

| # | Topic | Timestamp |
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

---

## Credits

Learning sequence inspired by Tech With Tim's **Python As Fast as Possible – Learn Python in ~75 Minutes**.

The tutorial text and examples in this repository are independently written for study and practice.
