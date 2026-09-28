import os
from dotenv import load_dotenv
load_dotenv()

class Settings:
    GOOGLE_API_KEY: str = os.getenv("GOOGLE_API_KEY","")
    APP_NAME: str = "AskWhat"
    DEBUG = bool= True

settings = Settings()
