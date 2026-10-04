import os
from langchain_google_genai import ChatGoogleGenerativeAI


def get_gemini_model():
    api_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")

    if not api_key:
        raise RuntimeError(
            "Gemini API key is not configured. "
            "Set GEMINI_API_KEY in the environment."
        )

    return ChatGoogleGenerativeAI(
        model="gemini-3.6-flash",
        google_api_key=api_key,
        max_retries=3,
    )