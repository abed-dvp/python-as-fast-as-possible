"""Quick runnable refresher for core Python fundamentals."""


def data_types_demo():
    integer = 10
    floating_point = 3.14
    text = "Python"
    boolean = True
    print(type(integer), type(floating_point), type(text), type(boolean))


def operators_demo():
    x, y = 10, 3
    print("add:", x + y)
    print("subtract:", x - y)
    print("multiply:", x * y)
    print("divide:", x / y)
    print("floor divide:", x // y)
    print("remainder:", x % y)
    print("power:", x ** y)


def collections_demo():
    values = [4, True, "hello"]
    values.append(8)
    print("list:", values)
    print("slice:", values[::-1])

    coordinates = (52.52, 13.405)
    print("tuple:", coordinates)

    unique_values = {1, 2, 2, 3}
    print("set:", unique_values)

    person = {"name": "Abed", "city": "Berlin"}
    print("dictionary:", person)


def control_flow_demo():
    score = 82
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    else:
        grade = "C or below"
    print("grade:", grade)

    for i in range(3):
        print("for loop:", i)

    count = 0
    while count < 3:
        print("while loop:", count)
        count += 1


def functions_demo():
    def calculate(x, y, operation="multiply"):
        if operation == "multiply":
            return x * y
        if operation == "divide":
            return x / y
        raise ValueError("Unsupported operation")

    print("function:", calculate(5, 6))

    def collect(*args, **kwargs):
        return args, kwargs

    args, kwargs = collect(1, 2, 3, language="Python", level="fundamentals")
    print("args:", args)
    print("kwargs:", kwargs)


def functional_tools_demo():
    numbers = [1, 2, 3, 4, 5, 6]
    doubled = list(map(lambda n: n * 2, numbers))
    even = list(filter(lambda n: n % 2 == 0, numbers))
    print(f"numbers={numbers}")
    print(f"doubled={doubled}")
    print(f"even={even}")


def exceptions_demo():
    try:
        value = int("42")
        print("converted:", value)
    except ValueError as exc:
        print("conversion failed:", exc)
    finally:
        print("exception demo finished")


def main():
    print("=== Data types ===")
    data_types_demo()
    print("\n=== Operators ===")
    operators_demo()
    print("\n=== Collections ===")
    collections_demo()
    print("\n=== Control flow ===")
    control_flow_demo()
    print("\n=== Functions ===")
    functions_demo()
    print("\n=== Functional tools ===")
    functional_tools_demo()
    print("\n=== Exceptions ===")
    exceptions_demo()


if __name__ == "__main__":
    main()
