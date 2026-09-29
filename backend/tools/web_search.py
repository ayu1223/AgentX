from langchain_core.tools import tool
from langchain_community.tools import DuckDuckGoSearchRun

search = DuckDuckGoSearchRun()

@tool
def web_search(query:str)->str:
    """Search The Web  Application"""
    try:
        return search.run(query)
    except Exception as e:
        return "Web Search Failed: {str(e)}"
