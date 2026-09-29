from builder.schema import AgentType, AgentConfig
from agents.chat_agent import ChatAgent
from agents.document_agent import DocumentAgent
from agents.tool_agent import ToolAgent


class AgentFactory:
    @staticmethod
    def create_agent(config:AgentConfig, vector_store=None):
        if config.agent_type==AgentType.CHAT:
            return ChatAgent(config)

        if config.agent_type==AgentType.RAG:
            if vector_store is None:
                raise ValueError(
                    "Vector store is required for RAG agent."
                )
            return DocumentAgent(
                config,
                vector_store
            )

        if config.agent_type == AgentType.TOOL:
            return ToolAgent(config)
        
        raise ValueError(
            f"Unsupported agent type: {config.agent_type}"
        )

        