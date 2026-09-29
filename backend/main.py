from fastapi import FastAPI

from api.routes.chat import router as chat_router
from api.routes.agents import router as agents_router

app = FastAPI()

@app.get('/')

def root():
    return {"Message": "App is runnning"}

app.include_router(chat_router)
app.include_router(agents_router)
