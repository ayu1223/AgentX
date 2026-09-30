from pathlib import Path
from fastapi import APIRouter, File,UploadFile, HTTPException

from rag.document_loader import load_document
from rag.text_splitter import split_documents
from rag.vector_store import save_vectore_store, create_vector_store
from api.schemas.document import DocumentUploadResponse

router = APIRouter()

VECTORSTORE_PATH = "storage/vectorstore/default"

@router.post("/documents/upload", response_model=DocumentUploadResponse)
async def upload_document(file:UploadFile = File(...)):

    if not file.filename:
        raise HTTPException(
            status_code =400,
            detail = "No File Selected."
        )
    
    contents = await file.read()

    if not contents:
        raise HTTPException(
            status_code =400,
            detail="Uploaded file is empty."
        )


    documents_dir = Path("storage/docements")
    documents_dir.mkdir(
        parents=True,
        exist_ok=True
    )

    file_path = documents_dir / file.filename


    with open(file_path,"wb") as buffer:
        buffer.write(contents)

    try:

        documents = load_document(str(file_path))
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail = f"Could not read document: {str(e)}."
        )
    chunks = split_documents(documents)

    if not chunks:
        raise HTTPException(
            status_code=400,
            detail = "Document contains no readable text."
        )
    
    vector_store = create_vector_store(chunks)

    vectorstore_dir = Path(VECTORSTORE_PATH)
    vectorstore_dir.mkdir(
        parents =True,
        exist_ok=True
    )

    save_vectore_store(
        vector_store,
        VECTORSTORE_PATH
    )

    return {
        "filename":file.filename,
        "message": "Document uploaded and indexed successfully.",
        "chunks": len(chunks)
    }