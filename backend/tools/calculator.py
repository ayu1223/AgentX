from langchain_core.tools import tool

@tool

def calculator(expression: str)->str:
    """Calculate a Mathematical Expression."""
    try:
        allowed = set("012345678-+/*().")
        if not all ( char in allowed for char in expression):
            return "Invalid MAthematic Expression."
        result = eval(expression, {"__builtins__":{}},{})

        return str(result)
    except Exception:
        return "Could not calculate the Expression"
