from fastapi import APIRouter

from agents.chat_agent import ChatAgent
from api.schemas.chat import ChatRequest, ChatResponse

router = APIRouter()
chat_agent = ChatAgent()

@router.post("/chat",response_model = ChatResponse)

def chat(request:ChatRequest):
    response = chat_agent.run(request.message)
    return ChatResponse(response=response)