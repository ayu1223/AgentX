from pydantic import BaseModel

class DocumentUploadResponse(BaseModel):
    filename: str
    message:str
    