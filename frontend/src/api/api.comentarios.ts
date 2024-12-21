
// ------ CONEXÃO FRONTEND E BACKEND
import { criarComentarioNoBackEnd } from '../interfaces/coment.interfaces'

const API = 'http://localhost:3000'


/// ENVIAR DADOS AO BACKEND E BANCO DE DADOS

export const createComentRequest = async(comentario: criarComentarioNoBackEnd) => {
   return await fetch(`${API}/coments`, {
      method: 'POST',
      // transformando em JSON, pois está no formato object
      body: JSON.stringify(comentario),
      headers: {
         'Content-Type': 'application/json'
      }
   })
}

// PUXAR DADOS DO BANCO DE DADOS E VISUALIZAR
export const getComentRequest = () => fetch(`${API}/coments`)