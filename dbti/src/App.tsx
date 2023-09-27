import { useEffect, useState } from "react";
import { Profissional } from "./interface/Profissional";

function App(): JSX.Element {
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [pagina, setPagina] = useState(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8080/profissional?page=${pagina}`);
        if (!response.ok) {
          throw new Error('Erro na resposta da API');
        }
        const data = await response.json();
        setProfissionais(data.content);
        setTotalPages(data.totalPages);
        return data;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error;
      }
    }
    fetchData();
  }, [pagina]);

  return (
    <div>
      {profissionais.length > 0 ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        profissionais.map((profissional: any) => (
          <ul>
            <li key={profissional.id}>{profissional.nome}</li>
            <li>Email: {profissional.email}</li>
            <li>Registro: {profissional.registro}</li>
            <li>Especialidade: {profissional.especialidade}</li>
          </ul>
        ))
      ) : (
        <p>Nenhum profissional encontrado.</p>
      )}
      <div className="botoes">
        <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 0}>
          Anterior
        </button>
        <button onClick={() => setPagina(pagina + 1)} disabled={pagina === totalPages - 1}>
          Próxima
        </button>
      </div>
    </div>
  );
}

export default App;
