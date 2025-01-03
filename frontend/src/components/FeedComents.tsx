import { useEffect, useState } from "react"
import { getComentRequest } from '../api/api.comentarios'
import { Comentario } from '../interfaces/coment.interfaces'

// Importando componente item, para compor a lista MODULARIZAÇÃO
import ComentarioUnico from "./ComentarioUnico"


function FeedComentarios() {

   const [comentario, novoComentario] = useState<Comentario[]>([])

   useEffect(() => {
      getComentRequest()
         .then((response) => response.json())
         .then((data) => {
            // Ordena os comentários do mais recente para o mais antigo
            const comentariosOrdenados = data.sort((a: Comentario, b: Comentario) => {
               const dataA = a.dataHora ? new Date(a.dataHora).getTime() : 0;
               const dataB = b.dataHora ? new Date(b.dataHora).getTime() : 0;
               return dataB - dataA; // Ordenação decrescente
            });
            novoComentario(comentariosOrdenados);
         });
   }, []);
   return (
      <div className="relative max-w-5xl mx-auto p-3 sm:p-10 pt-5 lg:w-11/12">
         <h1 className="mb-5 text-center text-3xl font-bold">Feed de Comentários</h1>
         <div className="overflow-y-scroll 
         sm:overflow-y-scroll h-[35.625rem] max-h-[80vh] pr-5 
         scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900
         max-sm:h-[25.000rem] max-sm:pl-5">
            {comentario.map((coment) => (
               <ComentarioUnico comentario = {coment} key={coment._id}/>
            ))}
         </div>
      </div>
   )
}

export default FeedComentarios
