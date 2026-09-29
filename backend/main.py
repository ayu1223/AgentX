from fastapi import FastAPI
from api.routes.chat import router as chat_router
app = FastAPI()

@app.get('/')

def root():
    return {"Message": "App is runnning"}

app.include_router(chat_router,)