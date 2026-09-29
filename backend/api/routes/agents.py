from fastapi import APIRouter

from builder.builder import build_agent_config
from factory.agent_factory import AgentFactory
from runtime.agent_runtime import AgentRuntime
from api.schemas.agent import AgentCreateRequest, AgentCreateResponse

router =  APIRouter()

@router.post("/agents/create",response_model = AgentCreateResponse)
def create_agent(request: AgentCreateRequest ):
    config = build_agent_config(
        task=request.task,
        name= request.name
    )

    AgentFactory.create_agent(config)

    return AgentCreateResponse(
        name=config.name,
        description=config.description,
        agent_type=config.agent_type.value
    )
    