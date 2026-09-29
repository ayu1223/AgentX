from enum import Enum

from pydantic import BaseModel
class AgentType(str,Enum):
    CHAT = "chat"
    RAG = "rag"
    TOOL = "tool"

class AgenConfig(BaseModel):
    name: str
    description: str
    agetn_type: AgentType
    memory: bool=True
    tools: list[str]=[]
    documents_required: bool=False
    
