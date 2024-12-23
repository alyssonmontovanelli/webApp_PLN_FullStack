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
         <h1 className="mb-6 text-2xl font-bold">Feed de Comentários</h1>
         {comentario.map((coment) => (
            <ComentarioUnico comentario = {coment} key={coment._id}/>
         ))}
      </div>
   )
}

export default FeedComentarios

