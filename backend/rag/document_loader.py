from pathlib import Path

from langchain_community.document_loaders import (PyPDFLoader, TextLoader,)

def load_document(file_path:str):
    path = Path(file_path)
    if path.suffix.lower()==".pdf":
        loader = PyPDFLoader(str(path))
    elif path.suffix.lower()==".txt":
        loader = TextLoader(str(path),encoding = "utf-8")
    else :
        raise ValueError("Unsupported file Type. Supported Format: PDF, TXT")
    return loader.load()
