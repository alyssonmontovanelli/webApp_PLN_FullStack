import { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { getComentRequest } from '../api/api.comentarios'; // Atualizando o import com o caminho correto

// Registre os componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Graficos = () => {
  const [dados, setDados] = useState<any>(null);

  // Função para buscar os dados da API
  const fetchDados = async () => {
    try {
      const response = await getComentRequest(); // Usando a função do seu arquivo de serviço
      const data = await response.json();
      setDados(data); // Armazenando os dados no estado
    } catch (error) {
      console.error('Erro ao buscar dados', error);
    }
  };

  useEffect(() => {
    fetchDados();
  }, []);

  if (!dados) {
    return <div>Carregando...</div>;
  }

  // Calculando os totais de sentimentos
  const sentimentos = dados.map((comentario: any) => comentario.sentimento);
  const totalComentarios = sentimentos.length;
  const distribuicao = {
    Positivo: sentimentos.filter((sentimento: string) => sentimento === 'Positivo').length,
    Neutro: sentimentos.filter((sentimento: string) => sentimento === 'Neutro').length,
    Negativo: sentimentos.filter((sentimento: string) => sentimento === 'Negativo').length,
  };

  // Dados para o gráfico de barras (distribuição dos sentimentos)
  const dadosBarra = {
    labels: ['Positivo', 'Neutro', 'Negativo'],
    datasets: [
      {
        label: 'Quantidade de Comentários',
        data: [distribuicao.Positivo, distribuicao.Neutro, distribuicao.Negativo],
        backgroundColor: ['#A3E635', '#818CF8', '#FB7185'],
        borderColor: ["#3A5314, #312E81,#881337"]
      },
    ],
  };

  // Dados para o gráfico de pizza (porcentagem de sentimentos)
  const dadosPizza = {
    labels: ['Positivo', 'Neutro', 'Negativo'],
    datasets: [
      {
        data: [
          (distribuicao.Positivo / totalComentarios) * 100,
          (distribuicao.Neutro / totalComentarios) * 100,
          (distribuicao.Negativo / totalComentarios) * 100,
        ],
        backgroundColor: ['#A3E635', '#818CF8', '#FB7185'],
      },
    ],
  };

  return (
    <div className='bg-slate-900'>
      <h1 className="mb-6 text-center text-3xl font-bold pt-6">Panorama de Indicadores</h1>
      <div className="grafico-container flex justify-between w-full px-10 max-sm:flex-col max-sm:px-2">

         <div className="grafico-barra w-full sm:w-3/5 p-2 max-sm:w-11/12 max-sm:mx-auto">
         <h3 className="mb-4 text-center text-1xl text-slate-400">
            Distribuição de Comentários por Sentimento
         </h3>
         <Bar data={dadosBarra} options={{ responsive: true }} />
         </div>

         <div className="grafico-pizza w-1/2 sm:w-2/5 p-2 max-sm:w-11/12 max-sm:mx-auto max-sm:mt-3">
         <h3 className="mb-4 text-center text-1xl text-slate-400">
            Porcentagem de Comentários por Sentimento
         </h3>
         <Pie data={dadosPizza} 
            options={{ responsive: true, maintainAspectRatio: true, // Mantém a proporção
            aspectRatio: 1, cutout: '65%' }} />
         </div>
      </div>
    </div>
  );
};

export default Graficos;
