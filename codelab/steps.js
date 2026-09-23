'use strict';

window.CODELAB_STEPS = [
  {
    "id": 1,
    "title": "Setup & Installation",
    "time": "00:40",
    "learn": "Before writing Python, confirm that Python 3 is installed and that you can run a .py file or a notebook.",
    "bullets": [
      "Check your Python version from the terminal.",
      "Use Python 3.11+ for this repository.",
      "You can work in VS Code, the Python interpreter, or Jupyter."
    ],
    "example": "python --version",
    "output": "Python 3.11.9",
    "challenge": "Open a terminal and confirm your Python version. Then create a file named hello.py that prints Hello, Python!",
    "starter": "print(\"Hello, Python!\")",
    "solution": "print(\"Hello, Python!\")",
    "takeaway": "Your environment is ready when Python 3 runs successfully from the terminal."
  },
  {
    "id": 2,
    "title": "Core Data Types",
    "time": "03:03",
    "learn": "Python values have types. Four core types are int, float, str, and bool.",
    "bullets": [
      "int stores whole numbers.",
      "float stores decimal numbers.",
      "str stores text.",
      "bool stores True or False."
    ],
    "example": "integer_value = 10\nfloat_value = 3.14\nstring_value = \"Python\"\nboolean_value = True\n\nprint(type(integer_value))\nprint(type(float_value))\nprint(type(string_value))\nprint(type(boolean_value))",
    "output": "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>",
    "challenge": "Create one value of each core type and print both the value and its type.",
    "starter": "age = \nprice = \nlanguage = \nis_learning = \n\n# print each value and its type",
    "solution": "age = 30\nprice = 19.99\nlanguage = \"Python\"\nis_learning = True\n\nprint(age, type(age))\nprint(price, type(price))\nprint(language, type(language))\nprint(is_learning, type(is_learning))",
    "takeaway": "A Python object always has a type, even though variables do not require type declarations."
  },
  {
    "id": 3,
    "title": "Output & Printing",
    "time": "04:57",
    "learn": "Use print() to send values to the console. You can print multiple values and customize their separator or ending.",
    "bullets": [
      "print() accepts multiple arguments.",
      "sep controls the separator.",
      "end controls what is printed at the end."
    ],
    "example": "print(\"A\", \"B\", \"C\", sep=\" | \", end=\" <-- done\\n\")",
    "output": "A | B | C <-- done",
    "challenge": "Print your name, city, and favorite language on one line separated by arrows.",
    "starter": "print()",
    "solution": "print(\"Abed\", \"Berlin\", \"Python\", sep=\" -> \")",
    "takeaway": "print() is simple, but sep and end give you useful formatting control."
  },
  {
    "id": 4,
    "title": "Variables",
    "time": "07:32",
    "learn": "Variables are names that reference Python objects. A name can later be rebound to a different value or even a different type.",
    "bullets": [
      "Assignment uses =.",
      "Variable names should be descriptive.",
      "Python is dynamically typed."
    ],
    "example": "age = 30\nprint(age)\n\nage = \"thirty\"\nprint(age)",
    "output": "30\nthirty",
    "challenge": "Create a variable called skill_level, print it, then assign a different type to the same variable and print it again.",
    "starter": "skill_level = \nprint(skill_level)\n\nskill_level = \nprint(skill_level)",
    "solution": "skill_level = 2\nprint(skill_level)\n\nskill_level = \"beginner\"\nprint(skill_level)",
    "takeaway": "The variable name is not locked to one type; it can reference another object later."
  },
  {
    "id": 5,
    "title": "Input & Type Conversion",
    "time": "10:20",
    "learn": "input() returns text. Convert that text when your program needs a number or another type.",
    "bullets": [
      "input() always returns str.",
      "Use int(), float(), str(), and bool() for conversion.",
      "Invalid conversions can raise exceptions."
    ],
    "example": "age = int(\"30\")\nprint(age + 1)",
    "output": "31",
    "challenge": "Convert the string \"42\" to an integer and the string \"3.5\" to a float, then add them.",
    "starter": "whole = \ndecimal = \nprint()",
    "solution": "whole = int(\"42\")\ndecimal = float(\"3.5\")\nprint(whole + decimal)",
    "takeaway": "Convert input explicitly before doing numeric operations."
  },
  {
    "id": 6,
    "title": "Arithmetic Operators",
    "time": "12:38",
    "learn": "Python supports normal arithmetic plus floor division, remainder, and exponentiation.",
    "bullets": [
      "/ performs true division.",
      "// performs floor division.",
      "% returns the remainder.",
      "** raises a value to a power."
    ],
    "example": "x = 10\ny = 3\n\nprint(x / y)\nprint(x // y)\nprint(x % y)\nprint(x ** y)",
    "output": "3.3333333333333335\n3\n1\n1000",
    "challenge": "You have 125 minutes. Use // and % to calculate full hours and remaining minutes.",
    "starter": "minutes = 125\nhours = \nremaining = \nprint(hours, remaining)",
    "solution": "minutes = 125\nhours = minutes // 60\nremaining = minutes % 60\nprint(hours, remaining)",
    "takeaway": "// and % are especially useful when splitting a quantity into groups and leftovers."
  },
  {
    "id": 7,
    "title": "String Operations & Methods",
    "time": "18:34",
    "learn": "Strings are immutable sequences of characters with many built-in methods.",
    "bullets": [
      "Methods such as lower(), upper(), strip(), and replace() return new strings.",
      "len() returns the number of characters.",
      "Use in for membership checks."
    ],
    "example": "text = \"  Hello Python  \"\n\nprint(text.strip())\nprint(text.lower())\nprint(text.replace(\"Python\", \"World\"))",
    "output": "Hello Python\n  hello python  \n  Hello World  ",
    "challenge": "Clean the string \"  PYTHON  \" by removing outer spaces and converting it to lowercase.",
    "starter": "text = \"  PYTHON  \"\nclean = \nprint(clean)",
    "solution": "text = \"  PYTHON  \"\nclean = text.strip().lower()\nprint(clean)",
    "takeaway": "String methods return new strings because strings themselves are immutable."
  },
  {
    "id": 8,
    "title": "Comparison Operators",
    "time": "22:19",
    "learn": "Comparisons evaluate relationships between values and return booleans.",
    "bullets": [
      "== tests equality.",
      "!= tests inequality.",
      "<, >, <=, >= compare ordering."
    ],
    "example": "print(10 == 10)\nprint(10 != 5)\nprint(10 > 5)\nprint(10 < 5)",
    "output": "True\nTrue\nTrue\nFalse",
    "challenge": "Create a variable score = 82 and print whether it is at least 80.",
    "starter": "score = 82\nprint()",
    "solution": "score = 82\nprint(score >= 80)",
    "takeaway": "Comparison expressions are the building blocks of conditions."
  },
  {
    "id": 9,
    "title": "Boolean Operators",
    "time": "28:10",
    "learn": "Combine conditions with and, or, and not.",
    "bullets": [
      "and requires both sides to be truthy.",
      "or requires at least one side to be truthy.",
      "not reverses a boolean value."
    ],
    "example": "age = 25\nhas_ticket = True\n\nprint(age >= 18 and has_ticket)\nprint(age < 18 or has_ticket)\nprint(not has_ticket)",
    "output": "True\nTrue\nFalse",
    "challenge": "A user may enter if they are at least 18 and have an invitation. Write the boolean expression.",
    "starter": "age = 21\nhas_invitation = True\ncan_enter = \nprint(can_enter)",
    "solution": "age = 21\nhas_invitation = True\ncan_enter = age >= 18 and has_invitation\nprint(can_enter)",
    "takeaway": "Boolean operators let you express real decision rules from smaller conditions."
  },
  {
    "id": 10,
    "title": "If / Elif / Else",
    "time": "31:26",
    "learn": "Conditional blocks decide which code runs.",
    "bullets": [
      "if checks the first condition.",
      "elif checks alternatives.",
      "else handles the remaining case.",
      "Indentation defines the block."
    ],
    "example": "temperature = 18\n\nif temperature >= 25:\n    print(\"Warm\")\nelif temperature >= 15:\n    print(\"Mild\")\nelse:\n    print(\"Cold\")",
    "output": "Mild",
    "challenge": "Classify a score: 90+ = A, 80+ = B, otherwise C or below.",
    "starter": "score = 84\n\nif :\n    print(\"A\")\nelif :\n    print(\"B\")\nelse:\n    print(\"C or below\")",
    "solution": "score = 84\n\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelse:\n    print(\"C or below\")",
    "takeaway": "Order your conditions from the most specific/highest-priority case to the fallback."
  },
  {
    "id": 11,
    "title": "Lists & Tuples",
    "time": "35:41",
    "learn": "Lists and tuples are ordered collections. Lists are mutable; tuples are immutable.",
    "bullets": [
      "Use [] for lists.",
      "Use () for tuples.",
      "Lists support append(), extend(), pop(), and item assignment.",
      "Copy a list when you need an independent list object."
    ],
    "example": "items = [4, True, \"hello\"]\nitems.append(\"new\")\nitems[0] = 99\nprint(items)\n\ncoordinates = (52.52, 13.405)\nprint(coordinates[0])",
    "output": "[99, True, 'hello', 'new']\n52.52",
    "challenge": "Create a list of three skills, append one more skill, then print the first and last items.",
    "starter": "skills = []\n\n# append one skill\n\nprint()\nprint()",
    "solution": "skills = [\"Python\", \"SQL\", \"Git\"]\nskills.append(\"Pandas\")\n\nprint(skills[0])\nprint(skills[-1])",
    "takeaway": "Choose a list when the collection may change; choose a tuple when it should stay fixed."
  },
  {
    "id": 12,
    "title": "For Loops",
    "time": "41:32",
    "learn": "A for loop iterates over the items of an iterable.",
    "bullets": [
      "range() creates a sequence of integers.",
      "Strings, lists, tuples, sets, and dictionaries are iterable.",
      "enumerate() gives both index and value."
    ],
    "example": "names = [\"Ada\", \"Guido\", \"Grace\"]\n\nfor index, name in enumerate(names):\n    print(index, name)",
    "output": "0 Ada\n1 Guido\n2 Grace",
    "challenge": "Loop over [2, 4, 6] and print the square of each number.",
    "starter": "numbers = [2, 4, 6]\n\nfor number in numbers:\n    print()",
    "solution": "numbers = [2, 4, 6]\n\nfor number in numbers:\n    print(number ** 2)",
    "takeaway": "Use for when you want to process each item in an iterable."
  },
  {
    "id": 13,
    "title": "While Loops",
    "time": "46:02",
    "learn": "A while loop repeats as long as its condition remains true.",
    "bullets": [
      "The condition is checked before each iteration.",
      "The loop must eventually change something that makes the condition false.",
      "Otherwise you create an infinite loop."
    ],
    "example": "count = 0\n\nwhile count < 3:\n    print(count)\n    count += 1",
    "output": "0\n1\n2",
    "challenge": "Start at 3 and count down to 1 using a while loop.",
    "starter": "count = 3\n\nwhile :\n    print(count)\n    ",
    "solution": "count = 3\n\nwhile count > 0:\n    print(count)\n    count -= 1",
    "takeaway": "Use while when repetition depends on a changing condition rather than a fixed iterable."
  },
  {
    "id": 14,
    "title": "Slicing",
    "time": "47:33",
    "learn": "Slicing extracts a portion of a sequence using start:stop:step.",
    "bullets": [
      "start is included.",
      "stop is excluded.",
      "step controls the jump size.",
      "A negative step can reverse a sequence."
    ],
    "example": "numbers = list(range(9))\n\nprint(numbers[2:5])\nprint(numbers[::2])\nprint(numbers[::-1])",
    "output": "[2, 3, 4]\n[0, 2, 4, 6, 8]\n[8, 7, 6, 5, 4, 3, 2, 1, 0]",
    "challenge": "From the string \"Python\", extract \"yth\" and then reverse the whole string.",
    "starter": "text = \"Python\"\nprint()\nprint()",
    "solution": "text = \"Python\"\nprint(text[1:4])\nprint(text[::-1])",
    "takeaway": "Think of slicing as sequence[start:stop:step], remembering that stop is excluded."
  },
  {
    "id": 15,
    "title": "Sets",
    "time": "50:46",
    "learn": "Sets store unique values and support fast membership checks and set algebra.",
    "bullets": [
      "Duplicates are removed.",
      "Set display order should not be relied on.",
      "Use set() for an empty set.",
      "| is union and & is intersection."
    ],
    "example": "left = {1, 2, 3}\nright = {3, 4, 5}\n\nprint(left | right)\nprint(left & right)",
    "output": "{1, 2, 3, 4, 5}\n{3}",
    "challenge": "Find the common skills between two sets.",
    "starter": "a = {\"Python\", \"SQL\", \"Git\"}\nb = {\"Python\", \"Pandas\", \"Git\"}\ncommon = \nprint(common)",
    "solution": "a = {\"Python\", \"SQL\", \"Git\"}\nb = {\"Python\", \"Pandas\", \"Git\"}\ncommon = a & b\nprint(common)",
    "takeaway": "Sets are ideal for uniqueness, membership, unions, and intersections."
  },
  {
    "id": 16,
    "title": "Dictionaries",
    "time": "54:29",
    "learn": "Dictionaries map unique keys to values.",
    "bullets": [
      "Use key: value pairs.",
      "Use [] for direct access.",
      "Use get() when a key may be missing.",
      "items() iterates over key-value pairs."
    ],
    "example": "person = {\"name\": \"Abed\", \"city\": \"Berlin\"}\n\nprint(person[\"name\"])\nprint(person.get(\"country\", \"Unknown\"))",
    "output": "Abed\nUnknown",
    "challenge": "Create a dictionary with name, city, and skill. Update the skill and print all key-value pairs.",
    "starter": "profile = {\n    \"name\": \"Abed\",\n    \"city\": \"Berlin\",\n    \"skill\": \"SQL\"\n}\n\n# update skill\n\nfor key, value in profile.items():\n    print(key, value)",
    "solution": "profile = {\n    \"name\": \"Abed\",\n    \"city\": \"Berlin\",\n    \"skill\": \"SQL\"\n}\n\nprofile[\"skill\"] = \"Python\"\n\nfor key, value in profile.items():\n    print(key, value)",
    "takeaway": "Use dictionaries when values have meaningful labels rather than only numeric positions."
  },
  {
    "id": 17,
    "title": "Comprehensions",
    "time": "57:40",
    "learn": "Comprehensions create collections concisely from iterable data.",
    "bullets": [
      "A list comprehension transforms or filters values.",
      "Dictionary and set comprehensions use the same idea.",
      "Prefer clarity over cleverness."
    ],
    "example": "squares = [i ** 2 for i in range(5)]\neven_numbers = [i for i in range(10) if i % 2 == 0]\n\nprint(squares)\nprint(even_numbers)",
    "output": "[0, 1, 4, 9, 16]\n[0, 2, 4, 6, 8]",
    "challenge": "Create a list containing the uppercase version of each language.",
    "starter": "languages = [\"python\", \"sql\", \"git\"]\nupper = \nprint(upper)",
    "solution": "languages = [\"python\", \"sql\", \"git\"]\nupper = [language.upper() for language in languages]\nprint(upper)",
    "takeaway": "A comprehension is useful when it expresses a simple transformation or filter clearly."
  },
  {
    "id": 18,
    "title": "Functions",
    "time": "1:00:33",
    "learn": "Functions package reusable logic behind a name.",
    "bullets": [
      "def creates a function.",
      "Parameters receive inputs.",
      "return sends a result back.",
      "Default parameters make arguments optional."
    ],
    "example": "def multiply(x, y):\n    return x * y\n\nprint(multiply(5, 6))",
    "output": "30",
    "challenge": "Write a function total_price(price, quantity) that returns price * quantity.",
    "starter": "def total_price(price, quantity):\n    \n\nprint(total_price(12.5, 4))",
    "solution": "def total_price(price, quantity):\n    return price * quantity\n\nprint(total_price(12.5, 4))",
    "takeaway": "Functions make logic reusable, testable, and easier to understand."
  },
  {
    "id": 19,
    "title": "*args, **kwargs & Unpacking",
    "time": "1:03:12",
    "learn": "*args gathers positional arguments, **kwargs gathers keyword arguments, and the same operators can unpack collections when calling functions.",
    "bullets": [
      "*args becomes a tuple.",
      "**kwargs becomes a dictionary.",
      "* unpacks an iterable into positional arguments.",
      "** unpacks a dictionary into keyword arguments."
    ],
    "example": "def inspect(*args, **kwargs):\n    print(args)\n    print(kwargs)\n\ninspect(1, 2, 3, language=\"Python\")",
    "output": "(1, 2, 3)\n{'language': 'Python'}",
    "challenge": "Unpack the list [4, 5] into a two-parameter add() function.",
    "starter": "def add(x, y):\n    return x + y\n\nnumbers = [4, 5]\nprint()",
    "solution": "def add(x, y):\n    return x + y\n\nnumbers = [4, 5]\nprint(add(*numbers))",
    "takeaway": "Packing and unpacking let functions work flexibly with groups of arguments."
  },
  {
    "id": 20,
    "title": "Scope & global",
    "time": "1:09:12",
    "learn": "Names created inside a function are local by default. A function can read outer names, but rebinding a global name requires global.",
    "bullets": [
      "Local variables belong to the function call.",
      "Global variables live outside functions.",
      "Prefer returning values over changing global state when possible."
    ],
    "example": "counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nprint(counter)",
    "output": "1",
    "challenge": "Rewrite a counter function without global by returning the new value instead.",
    "starter": "def increment(counter):\n    \n\ncounter = 0\ncounter = increment(counter)\nprint(counter)",
    "solution": "def increment(counter):\n    return counter + 1\n\ncounter = 0\ncounter = increment(counter)\nprint(counter)",
    "takeaway": "Understand global, but prefer explicit inputs and return values for cleaner code."
  },
  {
    "id": 21,
    "title": "Exceptions",
    "time": "1:10:42",
    "learn": "Exceptions represent runtime errors that interrupt normal execution.",
    "bullets": [
      "ValueError can come from invalid conversion.",
      "TypeError comes from incompatible operations.",
      "IndexError and KeyError come from missing positions or keys.",
      "ZeroDivisionError comes from division by zero."
    ],
    "example": "int(\"hello\")",
    "output": "ValueError",
    "challenge": "Predict which exception is raised by 10 / 0.",
    "starter": "result = 10 / 0",
    "solution": "# This raises ZeroDivisionError\nresult = 10 / 0",
    "takeaway": "Knowing common exception types helps you diagnose and handle expected failure cases."
  },
  {
    "id": 22,
    "title": "Handling Exceptions",
    "time": "1:11:28",
    "learn": "Use try and except to handle expected failures intentionally.",
    "bullets": [
      "Catch specific exception types.",
      "else runs when no exception occurs.",
      "finally always runs.",
      "Avoid a broad bare except unless you truly need it."
    ],
    "example": "try:\n    number = int(\"hello\")\nexcept ValueError:\n    print(\"That is not a valid integer.\")",
    "output": "That is not a valid integer.",
    "challenge": "Safely divide two numbers and return None when the denominator is zero.",
    "starter": "def safe_divide(a, b):\n    try:\n        \n    except :\n        ",
    "solution": "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return None",
    "takeaway": "Handle only errors you expect and know how to recover from."
  },
  {
    "id": 23,
    "title": "Lambda Functions",
    "time": "1:13:08",
    "learn": "A lambda is a small anonymous function containing one expression.",
    "bullets": [
      "lambda can take multiple arguments.",
      "It returns the expression result automatically.",
      "Use def when the logic needs a name or multiple statements."
    ],
    "example": "square = lambda x: x ** 2\nadd = lambda x, y: x + y\n\nprint(square(5))\nprint(add(3, 4))",
    "output": "25\n7",
    "challenge": "Create a lambda that returns the last character of a string.",
    "starter": "last_character = \nprint(last_character(\"Python\"))",
    "solution": "last_character = lambda text: text[-1]\nprint(last_character(\"Python\"))",
    "takeaway": "Lambda is useful for short throwaway functions, especially when another function expects a callable."
  },
  {
    "id": 24,
    "title": "map() & filter()",
    "time": "1:14:19",
    "learn": "map() transforms each item; filter() keeps items that satisfy a condition.",
    "bullets": [
      "Both return iterators in modern Python.",
      "Wrap with list() when you need a list.",
      "Comprehensions are often easier to read."
    ],
    "example": "numbers = [1, 2, 3, 4, 5, 6]\n\ndoubled = list(map(lambda x: x * 2, numbers))\neven = list(filter(lambda x: x % 2 == 0, numbers))\n\nprint(doubled)\nprint(even)",
    "output": "[2, 4, 6, 8, 10, 12]\n[2, 4, 6]",
    "challenge": "Use a list comprehension to produce the same even-number result without filter().",
    "starter": "numbers = [1, 2, 3, 4, 5, 6]\neven = \nprint(even)",
    "solution": "numbers = [1, 2, 3, 4, 5, 6]\neven = [number for number in numbers if number % 2 == 0]\nprint(even)",
    "takeaway": "Recognize map() and filter(), but choose comprehensions when they communicate the intent more clearly."
  },
  {
    "id": 25,
    "title": "F-Strings",
    "time": "1:17:30",
    "learn": "F-strings embed values and expressions directly inside readable string literals.",
    "bullets": [
      "Prefix the string with f.",
      "Put names or expressions inside {}.",
      "Format numbers with syntax such as :.2f."
    ],
    "example": "name = \"Abed\"\ncompleted = 25\npi = 3.14159265\n\nprint(f\"{name} completed {completed} Python topics.\")\nprint(f\"Pi: {pi:.2f}\")",
    "output": "Abed completed 25 Python topics.\nPi: 3.14",
    "challenge": "Print a sentence showing a product name, quantity, price, and total price using one f-string.",
    "starter": "product = \"Book\"\nquantity = 3\nprice = 12.5\n\nprint()",
    "solution": "product = \"Book\"\nquantity = 3\nprice = 12.5\n\nprint(f\"{quantity} x {product} at €{price:.2f} = €{quantity * price:.2f}\")",
    "takeaway": "Use f-strings for clear, concise string interpolation and formatting."
  }
];
