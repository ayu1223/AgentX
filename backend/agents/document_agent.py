from agents.base_agent import BaseAgent
from llm.gemini import get_gemini_model
from rag.retriever import get_retriever
from tools.web_search import web_search


class DocumentAgent(BaseAgent):

    def __init__(self, config, vector_store):
        self.config = config
        self.llm = get_gemini_model()
        self.retriever = get_retriever(vector_store)

    def run(self, message: str) -> str:

        # -----------------------------
        # 1. Get relevant document data
        # -----------------------------

        documents = self.retriever.invoke(message)

        document_context = "\n\n".join(
            document.page_content
            for document in documents
        )

        # -----------------------------
        # 2. Detect explicit web search
        # -----------------------------

        message_lower = message.lower()

        web_requested = any(
            phrase in message_lower
            for phrase in [
                "web search",
                "search the web",
                "search online",
                "search the internet",
                "search internet",
                "look up online",
                "find online",
                "use web",
                "use the web",
                "more insights"
            ]
        )

        web_context = ""

        # -----------------------------
        # 3. Perform web search
        # -----------------------------

        if web_requested:

            print("WEB SEARCH TRIGGERED")

            try:
                web_result = web_search.invoke(message)

                web_context = f"""
WEB SEARCH RESULTS:
{web_result}
"""

            except Exception as e:

                print("WEB SEARCH ERROR:", e)

                web_context = f"""
WEB SEARCH FAILED:
{str(e)}
"""

        else:

            print("NO WEB SEARCH")

        # -----------------------------
        # 4. Build final prompt
        # -----------------------------

        prompt = f"""
You are a specialized study assistant.

The user has provided study documents.

You have two information sources:

1. DOCUMENT
2. WEB SEARCH

DOCUMENT CONTEXT:
{document_context}

{web_context}

USER REQUEST:
{message}

INSTRUCTIONS:

- If the user asks about the provided document, use the document.
- If the user explicitly asks for web search, you MUST use the web search
  results provided above.
- If both document and web information are available, combine them.
- Clearly distinguish information from the document and information obtained
  from the web when relevant.
- Do not claim that web information came from the document.
- Do not ignore the web search results when the user explicitly requested
  web search.

If the user asks you to create a high-grade question based on the document
and also asks for web search:

1. Understand the concepts in the document.
2. Use the web search results for additional context.
3. Create a conceptual/reasoning-based question.
4. Do not simply copy a sentence from the document.
5. Make the question require understanding or application.

USER REQUEST:
{message}
"""

        # -----------------------------
        # 5. Ask Gemini
        # -----------------------------

        response = self.llm.invoke(prompt)

        return response.text