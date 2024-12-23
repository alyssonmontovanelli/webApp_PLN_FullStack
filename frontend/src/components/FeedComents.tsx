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
         .then((data) => novoComentario(data))
   }, [])
   return (
      <div className="relative max-w-5xl mx-auto p-10">
         <h1 className="mb-6 text-center text-3xl font-bold">Feed de Comentários</h1>
         <div className="md:overflow-y-scroll h-[35.625rem] max-h-[80vh] pr-5 
         scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
            {comentario.map((coment) => (
               <ComentarioUnico comentario = {coment} key={coment._id}/>
            ))}
         </div>
      </div>
   )
}

export default FeedComentarios
