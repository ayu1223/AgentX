from langchain_community.vectorstores import FAISS

from rag.embeddings import get_embeddings

def create_vector_store(document):
    embeddings = get_embeddings()

    return FAISS.from_documents(
        document,
        embeddings
    )

def save_vectore_store(vector_store,path:str):
    vector_store.save_local(path)

def load_vector_store( path:str):
    embeddings=get_embeddings()
    return FAISS.load_local(
        path,
        embeddings,
        allow_dangerous_deserialization=True
    )