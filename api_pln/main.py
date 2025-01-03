from fastapi import FastAPI
from router import pln_router

app = FastAPI()


app.include_router(pln_router.router)
