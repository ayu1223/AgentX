from langchain_google_genai import GoogleGenerativeAIEmbeddings

from config.settings import settings

def get_embeddings():
    return GoogleGenerativeAIEmbeddings(
        model="models/gemini-embedding-001",
        google_api_key=  settings.GOOGLE_API_KEY
    )
