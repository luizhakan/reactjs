import { useEffect, useState } from "react";
import { Profissional } from "./interface/Profissional";
import { Especialidade } from "./enum/Especialidades";

import { BiInfoCircle, BiSolidTrashAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { alterar, consultar, excluir } from "./service/services";
import Endereco from "./components/Endereco";

function formatarEspecialidade(especialidade: Especialidade) {
  switch (especialidade) {
    case Especialidade.SEGURANCA_CIBERNETICA:
      return "Segurança Cibernética";
    case Especialidade.DESENVOLVIMENTO_DE_SOFTWARE:
      return "Desenvolvimento de Software";
    case Especialidade.ANALISE_DE_DADOS:
      return "Análise de Dados";
    case Especialidade.INFRAESTRUTURA:
      return "Infraestrutura";
    case Especialidade.SUPORTE_TECNICO:
      return "Suporte Técnico";
    case Especialidade.DESIGN:
      return "Design";
    case Especialidade.MARKETING_DIGITAL:
      return "Marketing Digital";
    case Especialidade.DEVOPS:
      return "DevOps";
    case Especialidade.GESTAO_DE_TI:
      return "Gestão de TI";
    default:
      return "";
  }
}

function App(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [profissionais, setProfissionais] = useState<any[]>([]);
  const [pagina, setPagina] = useState(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [maisInformacoesProfissional, setMaisInformacoesProfissional] =
    useState<{ [key: number]: boolean }>({});
  const [abrirInput, setAbrirInput] = useState(false);
  const [alterarProfissional, setAlterarProfissional] = useState({});

  const [edicaoEnderecoProfissional, setEdicaoEnderecoProfissional] = useState({
    id: 0,
    logradouro: "",
    bairro: "",
    cidade: "",
    uf: "",
    cep: "",
  });

  useEffect(() => {
    consultar("http://localhost:8080/profissional", `?page=${pagina}`).then(
      (response) => {
        setProfissionais(response.content);
        setTotalPages(response.totalPages);
      }
    );
  }, [pagina]);
  function maisInformacoesF(profissionalId: number) {
    setMaisInformacoesProfissional((prevState) => ({
      ...prevState,
      [profissionalId]:
        !prevState[profissionalId] || !prevState[profissionalId],
    }));
  }

  function abrirInputF(profissionalId: number) {
    setAbrirInput(!abrirInput);
    setAlterarProfissional(profissionalId);
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      {profissionais && profissionais.length > 0 ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        profissionais.map((profissional: any) => (
          <div
            key={profissional.id}
            className={`flex flex-col ${
              maisInformacoesProfissional[profissional.id]
                ? "w-[200px] h-[280px]"
                : "w-[300px] h-[330px]"
            } mx-auto border-solid border-2 border-purple-500 rounded-sm mb-2`}
          >
            {maisInformacoesProfissional[profissional.id] ? (
              <div className="flex flex-col p-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold mb-2">Endereço</h2>
                  <BiInfoCircle
                    title="Informações de contato"
                    className="cursor-pointer ml-2"
                    onClick={() => maisInformacoesF(profissional.id)}
                  />
                  <FaEdit
                    className="cursor-pointer ml-2"
                    onClick={() => abrirInputF(profissional.id)}
                  />
                </div>
                <Endereco
                  id={profissional.endereco.id}
                  logradouro={profissional.endereco.logradouro}
                  bairro={profissional.endereco.bairro}
                  cidade={profissional.endereco.cidade}
                  uf={profissional.endereco.uf}
                  cep={profissional.endereco.cep}
                  condicao={abrirInput}
                />
              </div>
            ) : (
              <>
                <div className="flex flex-col">
                  <img
                    src="http://lorempixel.com.br/150/150"
                    alt={profissional.nome}
                    className="w-full h-[150px]"
                  />
                </div>
                <div className="flex justify-between  p-2">
                  <div className="flex-col">
                    <div className="flex items-center">
                      <h2 className="text-2xl font-bold mb-2">
                        {profissional.nome}
                      </h2>
                      <BiSolidTrashAlt
                        className="cursor-pointer ml-2"
                        onClick={() => {
                          excluir(profissional.id);
                          profissionais.splice(profissional, 1);
                          setProfissionais([...profissionais]);
                        }}
                      />
                      <BiInfoCircle
                        title="Informações de endereço"
                        className="cursor-pointer ml-2"
                        onClick={() => maisInformacoesF(profissional.id)}
                      />
                      <FaEdit className="cursor-pointer ml-2" />
                    </div>

                    <p className="mb-4">{profissional.email}</p>
                    <p className="mb-4">
                      {formatarEspecialidade(profissional.especialidade)}
                    </p>
                    <h2 className="text-2xl font-bold mb-2">
                      {profissional.telefone}
                    </h2>
                  </div>
                </div>
              </>
            )}
          </div>
        ))
      ) : (
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <h2 className="text-2xl font-bold mb-2">
            Nenhum profissional encontrado
          </h2>
        </div>
      )}

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPagina(pagina - 1)}
          disabled={pagina === 0}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={() => setPagina(pagina + 1)}
          disabled={pagina === totalPages - 1}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default App;
