from abc import ABC , abstractmethod

class BaseAgent(ABC):
    @abstractmethod
    def run(self, message:str)->str:
        pass