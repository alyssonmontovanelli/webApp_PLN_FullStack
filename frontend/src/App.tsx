import StartComentario from "./components/StartComentario"
import FeedComentarios from "./components/FeedComents"
import Graficos from "./components/Graficos"

function App() {

  return (
    <div id="divCentral" 
    className="bg-slate-900 text-gray-100 max-h-full">

      {/* {/* Div 1 Caixa de texto */}
      <div>
        <StartComentario />
      </div>

      {/* Div Feed -> Feed de comentários / Gráfico*/}
      <div className="items-center">

        {/* FEED DE COMENTÁRIOS */}
        <div>
          <FeedComentarios />
        </div>
      </div>

              
        {/* Div 1.1 -> Bloco para recebimento do texto */}
      <div className="bg-slate-700">
        <h1><Graficos /></h1>
      </div>
    </div>
  )
}

export default App
