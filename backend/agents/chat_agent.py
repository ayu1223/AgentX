from agents.base_agent import BaseAgent
from llm_gemini import get_gemini_model

class ChatAgent(BaseAgent):
    def __init__(self):
        self.llm = get_gemini_model()

    def run(self,prompt:str)->str:
        response = self.llm.invoke(prompt)
        return response.content