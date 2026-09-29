from pydantic import BaseModel

class AgentCreateRequest(BaseModel):
    task:str
    name:str="My Agent"

class AgentCreateResponse(BaseModel):
    name: str
    description: str
    agent_type: str
