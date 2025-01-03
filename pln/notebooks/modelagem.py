import numpy as np
import pandas as pd
from unidecode import unidecode
import spacy
from sklearn.metrics import f1_score, accuracy_score, roc_auc_score

import nltk
nltk.download('stopwords')
nltk.download('rslp')

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.model_selection import GridSearchCV
from sklearn.linear_model import LogisticRegression



data = pd.read_csv("C:/Projetos Pessoais/dados/imdb_dados_processados_sklearn1_6_0.csv")
df = data.copy()
stop_words = nltk.corpus.stopwords.words('portuguese')

# Unigramas
vect_uni_cv = CountVectorizer(ngram_range=(1,1), stop_words = stop_words)
vect_uni_cv.fit(df.text)
text_vect_uni_cv = vect_uni_cv.transform(df.text)

import pickle

print("salvando vetorizador.....\n\n")
with open("vectorizerNOVA_VERSAO.pkl", "wb") as f:
    pickle.dump(vect_uni_cv, f)

print("Separando em dados Treino e teste.....\n\n")
x_train, x_test, y_train, y_test = train_test_split(text_vect_uni_cv,
                                                    df["sentiment_int"],
                                                    test_size = 0.2,
                                                    random_state = 123)

print("TREINANDO MODELO.....\n\n")

# Modelo Regressão Logistica com GridSearch
lr_grid = LogisticRegression()
lr_grid_values = {
   'penalty': ['l1','l2'],
   'C': [0.001, 0.009, 0.01, .09, 1, 5, 10, 25]
}

lr_grid_cv = GridSearchCV(lr_grid,
                          param_grid = lr_grid_values,
                          scoring = 'accuracy',
                          cv=5)

lr_grid_cv.fit(x_train, y_train)

print(f"melhor estimador = {lr_grid_cv.best_estimator_}")

# Privesões
y_predict_lr_GS = lr_grid_cv.predict(x_test)

acc_v2 = accuracy_score(y_predict_lr_GS, y_test)


modelo_v2_metricas = {
 "Modelo": "Logistic Regression GS",
 "Versão": "2",
 "Detalhes": "C=09",
 "F1_Score": round(f1_score(y_predict_lr_GS, y_test), 3),
 "Acurácia": round(accuracy_score(y_predict_lr_GS, y_test), 3),
 "AUC": round(roc_auc_score(y_test, y_predict_lr_GS), 3) #AUC inverte a ordem dos dados -  primeiro real depois previsões
}

with open("modelo_v2_LRGS_NOVA_VERSAO.pkl", "wb") as file:  # "wb" significa escrita em modo binário
    pickle.dump(lr_grid_cv, file)
print(modelo_v2_metricas)


import sklearn
print(sklearn.__version__)