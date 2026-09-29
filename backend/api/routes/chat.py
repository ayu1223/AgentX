from fastapi import APIRouter

from agents.chat_agent import ChatAgent
from builder.schema import AgentConfig, AgentType
from api.schemas.chat import ChatRequest, ChatResponse

router = APIRouter()
chat_config = AgentConfig(
    name="Default Chat Agnet",
    description = "General purpose chat Agent",
    agent_type=AgentType.CHAT
)
chat_agent = ChatAgent(chat_config)

@router.post("/chat",response_model = ChatResponse)

def chat(request:ChatRequest):
    response = chat_agent.run(request.message)
    return ChatResponse(response=response)