from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

@app.get("/api")
async def get_root():
    return "Welcome to the FastAPI server!"

app.mount("/", StaticFiles(directory="../frontend/dist", html=True), name="dist")