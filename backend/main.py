from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes.chat import router as chat_router
from api.routes.agents import router as agents_router
from api.routes.documents import router as documents_router
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://YOUR-AGENTX-BACKEND.onrender.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')

def root():
    return {"Message": "App is runnning"}

app.include_router(chat_router)
app.include_router(agents_router)
app.include_router(documents_router)