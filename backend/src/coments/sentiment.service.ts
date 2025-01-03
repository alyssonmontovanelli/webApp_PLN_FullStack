import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SentimentoService {
   // URL do método POST onde será realizada a análise
  private readonly fastApiUrl = 'http://127.0.0.1:8000/api/previsao';

   // Método para enviar texto e receber previsão
  async analisarSentimento(texto: string): Promise<string> {
    try {
      const response = await axios.post(this.fastApiUrl, { texto });
      return response.data.sentimento; // Retorna o sentimento
    } catch (error) {
      throw new HttpException(
        `Erro ao conectar com a API de Sentimento: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

// Usando axios para enviar requisição POST à API do FASTAPI