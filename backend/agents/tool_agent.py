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
-calculator: for mathematical calculatoins
-web_search: for information that requires web search
User request:
{message}
Decide Whether a tool is needed."""
        response =self.llm.invoke(prompt)
        return response.text