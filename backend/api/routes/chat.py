from pathlib import Path
from fastapi import APIRouter


from agents.document_agent import DocumentAgent
from agents.chat_agent import ChatAgent
from agents.tool_agent import ToolAgent
from builder.schema import AgentConfig, AgentType
from api.schemas.chat import ChatRequest, ChatResponse
from rag.vector_store import load_vector_store

router = APIRouter()

VECTORSTORE_PATH = "storage/vectorstore/default"


chat_config = AgentConfig(
    name="Default Chat Agnet",
    description = "General purpose chat Agent",
    agent_type=AgentType.CHAT
)
chat_agent = ChatAgent(chat_config)

active_chat_agent = None


@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):

    global active_chat_agent

    if (
        active_chat_agent is None
        or active_chat_agent.config.name != request.agent_name
        or active_chat_agent.config.description != request.agent_description
    ):

        config = AgentConfig(
            name=request.agent_name,
            description=request.agent_description,
            agent_type=AgentType.CHAT
        )

        active_chat_agent = ChatAgent(config)

    response = active_chat_agent.run(request.message)

    return ChatResponse(response=response)

@router.post("/rag/chat",response_model=ChatResponse)
def rag_chat(request:ChatRequest):
    if not Path(VECTORSTORE_PATH).exists():
        return ChatResponse(
            response = "No document has been uploaded yet."
        )
    vector_store = load_vector_store(VECTORSTORE_PATH)

    rag_config = AgentConfig(
        name="Document Q&A Agent",
        description="Answers question using uploaded documents",
        agent_type=AgentType.RAG,
        documents_required=True
    )

    rag_agent = DocumentAgent(
        rag_config,
        vector_store
    )
    response = rag_agent.run(request.message)

    return ChatResponse(response=response)
tool_config = AgentConfig(
    name="Default Tool Agent",
    description = "Agent with calculator and web search tools",
    agent_type=AgentType.TOOL,
    tools = ["calculator","web_Search"]
)
tool_agent = ToolAgent(tool_config)

@router.post("/tool/chat",response_model=ChatResponse)
def tool_chat(request: ChatRequest):
    response = tool_agent.run(request.message)
    return ChatResponse(response=response)
