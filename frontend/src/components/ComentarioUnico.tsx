import { Comentario } from '../interfaces/coment.interfaces'

interface Props{
   comentario: Comentario
}

function ComentarioUnico({comentario}: Props) {
   return (
      <div className='mt-2'
       key={comentario._id}>
         <div className='flex flex-col gap-6'>
            <div className="flex-col items-center gap-x-8 rounded-md
            bg-slate-800 p-3 md:flex-row">
               {/* Div para divisão de nome / sentimento */}
               <div className='flex'>
                  <h1 className='font-bold pr-5'>
                     Comentarista Sincero
                  </h1>
                  {/* Condicional para estilizar cada comentário com base no sentimento */}
                  <p className= {`rounded-md px-3 py-1 text-xs font-bold ${
                     comentario.sentimento === "Positivo"
                     ? "bg-lime-400 text-lime-900"
                     : comentario.sentimento === "Neutro"
                     ? "bg-indigo-400 text-indigo-900"
                     : "bg-rose-400 text-rose-900"
                     }`}>
                  {comentario.sentimento}
                  </p>
               </div>

               <p className='text-slate-400 pt-2'>
                  {comentario.texto}
               </p>
               {/* <p>{comentario.dataHora}</p> */}
               <p className='text-slate-400 pt-1'>
                  {comentario.dataHora 
                        ? `${new Date(comentario.dataHora).toLocaleDateString("pt-BR")} ${new Date(comentario.dataHora).toLocaleTimeString("pt-BR", {
                           hour: "2-digit",
                           minute: "2-digit",
                        })}`
                     : "Data não disponível"}
               </p>

            </div>
         </div>
      </div>
   );
}

export default ComentarioUnico;

// MODULARIZANDO O 