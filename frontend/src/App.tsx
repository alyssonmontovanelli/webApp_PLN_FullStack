import StartComentario from "./components/StartComentario"

function App() {

  return (
    <div id="divCentral" className="bg-slate-900 text-gray-100 h-screen">

      {/* {/* Div 1 Caixa de texto */}
      <div>
        <StartComentario />
      </div>

      {/* Div Feed -> Feed de comentários / Gráfico*/}
      <div className="flex items-center">
        
        {/* Div 1.1 -> Bloco para recebimento do texto */}
        <div className="bg-slate-700">
          <h1>DASDASDAS</h1>
        </div>
        
        <div className="bg-orange-500">
        <h1>FEED DE COMENTÁRIOS</h1>
        </div>
      </div>
    </div>
  )
}

export default App
