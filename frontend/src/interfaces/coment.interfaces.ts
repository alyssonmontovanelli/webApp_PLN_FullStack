
export interface Comentario {
   _id: string;
   texto: string;
   sentimento?: string;
   dataHora?: DateConstructor;
}

export type criarComentarioNoBackEnd = Omit<Comentario, '_id'>

