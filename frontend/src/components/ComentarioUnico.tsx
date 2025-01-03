import { Comentario } from '../interfaces/coment.interfaces'

interface Props{
   comentario: Comentario
}

function gerarNomeAleatorio() {
   const nome = ["Comentarista", "Digitador", "Anônimo", "Crítico", "Escritor", "Pensador"]
   const sobrenome = ["Sincero", "Mentiroso", "Duvidoso", "Reflexivo", "Polêmico", "Curioso"]

   const nomeAleatorio = nome[Math.floor(Math.random() * nome.length)]
   const sobrenomeAleatorio = sobrenome[Math.floor(Math.random() * sobrenome.length)]

   return `${nomeAleatorio} ${sobrenomeAleatorio}`
}

function ComentarioUnico({comentario}: Props) {
   return (
      <div className='mt-2'
       key={comentario._id}>
         <div className='flex flex-col gap-6'>
            <div className="sm:flex-col items-center gap-x-8 rounded-2xl
            bg-slate-800 p-3 md:flex-row max-sm:p-1">
               {/* Div para divisão de nome / sentimento */}
               <div className='text-center sm:flex'>
                  <h1 className='pb-1 font-bold sm:pr-5'>
                     {gerarNomeAleatorio()}
                  </h1>
                  {/* Condicional para estilizar cada comentário com base no sentimento */}
                  <p className= {`m-0 rounded-md px-3 py-1 text-xs font-bold ${
                     comentario.sentimento === "Positivo"
                     ? "bg-lime-400 text-lime-900"
                     : comentario.sentimento === "Neutro"
                     ? "bg-indigo-400 text-indigo-900"
                     : "bg-rose-400 text-rose-900"
                     } max-sm:w-2/4 max-sm:mx-auto `}>
                  {comentario.sentimento}
                  </p>
               </div>

               <p className='max-sm:text-center text-slate-400 pt-2'>
                  {comentario.texto}
               </p>
               {/* <p>{comentario.dataHora}</p> */}
               <p className='max-sm:text-center text-slate-400 pt-1'>
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