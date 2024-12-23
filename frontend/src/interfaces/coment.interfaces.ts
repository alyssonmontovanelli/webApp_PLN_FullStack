
export interface Comentario {
   _id: string;
   texto: string;
   sentimento?: string;
   dataHora?: Date;
}

export type criarComentarioNoBackEnd = Omit<Comentario, '_id'>

