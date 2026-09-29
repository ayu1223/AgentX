from langchain_text_splitters import RecurrsiveCharacterTextSplitter

def split_documents(documents):
    splitter = RecurrsiveCharacterTextSplitter(
        chunk_size = 1000, 
        chunk_overlap=200
    )
    return splitter.aplit_documents(documents)
