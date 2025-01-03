

// Componente para a parte inicial do App Web
// Recebimento do comentário pelo usuário e validação

import { ChangeEvent, FormEvent, useState } from "react"
// Conexão com backend
import { createComentRequest } from '../api/api.comentarios'

function StartComentario() {

   // Mudança de Estado de Comentario -> novoComentario
   const [comentario, novoComentario] = useState({
      texto: "",
      sentimento: "Neutro",
      dataHora: new Date(),
   });

   const handleChange = (
      e: ChangeEvent < HTMLInputElement >
   ) => novoComentario({ ...comentario, [e.target.name] : e.target.value });

   // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
   //    e.preventDefault();
   //    console.log(comentario);
   //    const res = await createComentRequest(comentario);
   //    const data = await res.json();
   //    console.log("Agora em, vamos ver");
   //    console.log(res)
   //    console.log(data)
   //    novoComentario({ ...comentario, texto: "" });
   // }   

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(comentario);
   
      // Envia o objeto diretamente com `dataHora` como Date
      const res = await createComentRequest(comentario);
      const data = await res.json();
      console.log("Agora em, vamos ver");
      console.log(res);
      console.log(data);
   
      // Reseta o texto do comentário após o envio
      novoComentario({ ...comentario, texto: "" });
   };


   // Retorno no HTML
   return(
      <div className="relative max-w-5xl mx-auto p-5 sm:p-10">
         <h1 className="text-3xl text-center pt-3 font-bold sm:text-5xl ">
            Análise de Sentimentos</h1>
         <p className="m-4 text-lg text-slate-400 text-center max-w-3xl 
         mx-auto dark:text-slate-400 ">
            Escreva abaixo o seu comentário</p>
         
         <form onSubmit={handleSubmit} action="" className="justify-items-center">
            <input type="text" name="texto" value={comentario.texto}
            className="border-2 border-gray-700 p-3 rounded-3xl
             bg-slate-800 block m-4 appearance-none
             focus-within:ring-5 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600
             w-11/12 sm:w-7/12"
            placeholder="Escreva seu comentário..." 
            onChange={handleChange}/>

            <button className="m-1 shrink-0 rounded-full bg-gradient-to-br
             from-sky-500 to-cyan-400 px-10 py-2 text-sm font-medium
             hover:from-sky-700 hover:to-cyan-600 focus:outline-none
             focus:ring-2 focus:ring-cyan-600/50 ">
               Enviar</button>
         </form>
      </div>
   )
}


export default StartComentario