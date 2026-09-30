from pydantic import BaseModel


class ChatRequest(BaseModel):
    message: str
    agent_name: str
    agent_description: str


class ChatResponse(BaseModel):
    response: str