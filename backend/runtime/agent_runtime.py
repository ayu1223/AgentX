class AgentRuntime:
    def __init__(self,agent):
        self.agent = agent
    def run(self,message:str)->str:
        return self.agent.run(message)