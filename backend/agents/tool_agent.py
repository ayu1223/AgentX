from agents.base_agent import BaseAgent
from llm.gemini import get_gemini_model
from tools.calculator import calculator
from tools.web_search import web_search

class ToolAgent(BaseAgent):
    def __init__(self,config):
        self.config = config
        self.llm = get_gemini_model()
        self.tools = {
            "calculator":calculator,
            "web_search":web_search,
        }

    def run(self, message:str)->str:
        prompt = f"""
You are a tool-using assistant.
Available tools:
1. calculator: for mathematical calculatoins
2. web_search: for information that requires web search
User request:
{message}
Return exactly one of these formats;
TOOL:calculator:<expression>
TOOL:web_search:<search query>
TOOL:none
Don not return anything else."""
        decision = self.llm.invoke(prompt).text.strip()
        if decision.startswith("TOOL:calculator:"):
            expression = decision[len("TOOL:calculator:"):].strip()
            result = calculator.invoke(expression)
            return str(result)

        if decision.startswith("TOOL:web_search:"):
            query = decision[len("TOOL:web_search:"):].strip()
            result = web_search.invoke(query)
            return(str(result))
        
        response =self.llm.invoke(message)
        return response.text