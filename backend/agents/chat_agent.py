from agents.base_agent import BaseAgent
from llm.gemini import get_gemini_model
from memory.conversation_memory import ConversationMemory

class ChatAgent(BaseAgent):
    def __init__(self):
        self.llm = get_gemini_model()
        self.memory = ConversationMemory()

    def run(self,prompt:str)->str:
        self.memory.add_user_message(prompt)

        response = self.llm.invoke(
            self.memory.getmessage()
        )
        response_text =response.text

        self.memory.add_ai_message(response_text)
        return response_text