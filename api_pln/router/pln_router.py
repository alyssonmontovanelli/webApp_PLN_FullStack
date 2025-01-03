from fastapi import APIRouter, HTTPException
from scripts.preprocess import vetor_texto, model
from pydantic import BaseModel

router = APIRouter(prefix="/api")

@router.get("/")
def recebeTexto():
   return 'text'

class TextoInput(BaseModel):
   texto: str

@router.post("/previsao")
def enviaPrevisao(input: TextoInput):

   texto = input.texto

   texto_vetorizado = vetor_texto(texto)

   probabilidade = model.predict_proba(texto_vetorizado)
   sentimento_predict = model.predict(texto_vetorizado)

   sentimento = "Neutro"
   if 0.46 <= float(probabilidade[0][0]) <= 0.55:
      sentimento = "Neutro"
   elif float(probabilidade[0][0]) < 0.46:
      sentimento = "Positivo"
   elif float(probabilidade[0][0]) > 0.55:
      sentimento = "Negativo"

   
   return f"{probabilidade} - {sentimento_predict} - {probabilidade[0][0]} - {sentimento}"
