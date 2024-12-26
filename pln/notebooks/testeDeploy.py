import pickle  # Para carregar o modelo com pickle
import pandas as pd

import numpy as np
from unidecode import unidecode
import spacy
from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import CountVectorizer



import nltk
nltk.download('stopwords')
nltk.download('rslp')

with open('pln/model/modelo_v2_LRGS_NOVA_VERSAO.pkl', 'rb') as file:  # Carrega o modelo treinado com pickle
   model = pickle.load(file)

print(model)

with open('pln/model/vectorizerNOVA_VERSAO.pkl', 'rb') as file:  # Carrega o modelo treinado com pickle
   vectorizer = pickle.load(file)

print(vectorizer)

# Testanto com novos dados
texto = "gosto disso do comentário que você fez ao meu respeito"
texto2 = "Odeio esse cara com todas as minhas forças"

nlp = spacy.load("pt_core_news_lg")
def lematizer(text):

   # Lista de sentenças e documentos
   sentencas = []
   doc = nlp(text) # leitura do text e interpretar em lg de processamento

   for palavra in doc:
      if palavra.pos_ == "VERB":
         sentencas.append(palavra.lemma_) # se for verbo, extrai o lemma
      else:
         sentencas.append(palavra.orth_) # se n for verbo, extrai a palavra

   return " ".join(sentencas)

def processa(text):
   text = text.lower()
   text = unidecode(text)
   text = lematizer(text)
   return text


def vetor_texto(text):
   novoTexto = processa(text)
   textoVetorizado = vectorizer.transform([novoTexto])
   return textoVetorizado


stop_words = nltk.corpus.stopwords.words('portuguese')


# previsao com modelo treinado - probabilidade

texto_Vetorizado = vetor_texto(texto)
texto_Vetorizado2 = vetor_texto(texto2)

sentimento = model.predict(texto_Vetorizado)
probabilidade = model.predict_proba(texto_Vetorizado)
print(f"\nSentimento => {sentimento}")
print(f"\nProbabilidade => {probabilidade}")


sentimento2 = model.predict(texto_Vetorizado2)
probabilidade2 = model.predict_proba(texto_Vetorizado2)
print(f"\nSentimento => {sentimento2}")
print(f"\nProbabilidade => {probabilidade2}")


# TESTE OK 