from builder.classifier import classify_task
from builder.schema import AgentType, AgentConfig

def build_agent_config(task:str, name="My Agent")->AgentConfig:
    agent_type = classify_task(task)

    if agent_type==AgentType.RAG:
        return AgentConfig(
            name=name,
            description=task,
            agent_type=agent_type,
            memory =True,
            documents_required=True
        )
    if agent_type==AgentType.TOOL:
        return AgentConfig(
            name=name,
            description=task,
            agent_type = agent_type,
            memory=True,
            tools=["web_search","calculator"]
        )
    return AgentConfig(
        name=name,
        description=task,
        agent_type=agent_type,
        memory=True,
        
    )

