from langchain_google_genai import ChatGoogleGenerativeAI

from config.settings import settings

def get_gemini_model():
    return ChatGoogleGenerativeAI(
        model = "gemini-3.6-flash",
        google_api_key = settings.GOOGLE_API_KEY,
        temperature = 0.2,
        max_retries = 3
    )
