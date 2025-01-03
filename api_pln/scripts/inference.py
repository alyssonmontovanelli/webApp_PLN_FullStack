import joblib  # ou outro método para carregar o modelo
import pandas as pd
from scripts.preprocess import preprocess_text  # Função de pré-processamento

# Função para carregar o modelo
def load_model():
    model = joblib.load('model/your_model.joblib')  # Carrega o modelo treinado
    return model

# Função para realizar a inferência
def run_inference(text):
    model = load_model()  # Carrega o modelo
    preprocessed_text = preprocess_text(text)  # Pré-processa o texto (como remoção de stopwords, etc.)

    # Aqui você pode ter a lógica para passar o texto pelo modelo
    prediction = model.predict([preprocessed_text])  # Faz a previsão

    # Retorna a previsão em um formato compreensível
    return {"prediction": prediction[0]}


