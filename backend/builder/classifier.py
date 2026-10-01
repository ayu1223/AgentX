from llm.gemini import get_gemini_model
from builder.schema import AgentType


def classify_task(task: str) -> AgentType:

    llm = get_gemini_model()

    prompt = f"""
You are an Agent Factory classifier.

Classify the user's requested agent into EXACTLY ONE
of these three agent types:

1. CHAT
Use CHAT when the agent can perform the task using
its language model and conversation knowledge.

Examples:
- teaching
- studying
- mathematics
- programming help
- explanations
- writing
- reasoning
- problem solving
- exam preparation

2. RAG
Use RAG when the agent specifically needs to work
with user-provided documents, PDFs, notes, reports,
files, or a private document collection.

Examples:
- answer questions from uploaded PDFs
- study from lecture notes
- search through company documents
- answer using provided files

3. TOOL
Use TOOL when the agent specifically requires
external tools or external information that the LLM
cannot reliably provide by itself.

Examples:
- internet/web search
- live/current information
- external APIs
- tool-based operations

IMPORTANT:

Do NOT classify based on individual keywords.

Understand the meaning and intent of the entire request.

Mathematical calculation by itself is NOT a reason to
choose TOOL because the Chat Agent can handle mathematics.

If the user wants web access, choose TOOL.

If the user wants answers from their own documents,
choose RAG.

Otherwise choose CHAT.

USER TASK:
{task}

Return ONLY one of:

CHAT
RAG
TOOL
"""

    response = llm.invoke(prompt)

    result = response.text.strip().upper()

    if "RAG" in result:
        return AgentType.RAG

    if "TOOL" in result:
        return AgentType.TOOL

    return AgentType.CHAT