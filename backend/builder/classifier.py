from builder.schema import AgentType

def classify_task(task:str)->AgentType:
    task_lower = task.lower()

    if any (word in task_lower 
            for word in [
                "pdf",
                "document",
                "uploaded",
                "file",
                "uploaded",
                "notes",
                "report"
            ]):
        return AgentType.RAG

    if any (word in task_lower 
            for word in [
                "internet",
                "calculate",
                "search",
                "web",
                "find",
                "calculator",
                "latest",
                "current",
                "online"
            ]):
        return AgentType.TOOL
    if any (word in task_lower
            for word in [
                "casual",
                "friend",
                "normal talk",
                "chat"
            ]):
        return AgentType.CHAT

