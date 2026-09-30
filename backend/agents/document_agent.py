from agents.base_agent import BaseAgent
from llm.gemini import get_gemini_model
from rag.retriever import get_retriever

class DocumentAgent(BaseAgent):
    def __init__ (self,config,vector_store):
        self.config = config
        self.llm = get_gemini_model()
        self.retriever = get_retriever(vector_store)

    def run(self, message:str)->str:
        documents = self.retriever.invoke(message)
        if not documents:
            return "I could not find relevant information in the documents."

        context = "\n\n".join(
            document.page_content
            for document in documents
        )

        prompt = f"""
Answer the user's question using only the provided document context.

Document context:
{context}

User question:
{message}

If the answer is not present in the document context, say:
"I could not find the answer in the provided documents."
"""

        response = self.llm.invoke(prompt)

        return response.text