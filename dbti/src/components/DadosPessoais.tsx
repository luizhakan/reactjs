import { useState } from "react";
import {
  BiInfoCircle,
  BiMailSend,
  BiPhone,
  BiSolidTrashAlt,
} from "react-icons/bi";
import { alterar, excluir } from "../service/services";
import { Especialidade } from "../enum/Especialidades";
import { FaEdit } from "react-icons/fa";

function DadosPessoais({
  id,
  nome,
  email,
  especialidade,
  telefone,
  maisInformacoesF,
}: {
  id: number;
  nome: string;
  email: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  especialidade: any;
  telefone: string;
  maisInformacoesF: () => void;
  condicao: boolean;
}) {
  const [profissional, setProfissional] = useState({
    id: id,
    nome: nome,
    email: email,
    especialidade: especialidade,
    telefone: telefone,
  });

  const [condicao, setCondicao] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleExcluir(profissional: any) {
    excluir(profissional);
    window.location.reload();
  }

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

  function handleAlterarCondicao() {
    setCondicao(!condicao);
  }

  const dadosPessoais = {
    id: profissional.id,
    nome: profissional.nome,
    email: profissional.email,
    especialidade: profissional.especialidade,
    telefone: profissional.telefone,
  };

  if (!condicao) {
    alterar(profissional.id, dadosPessoais);
  }

  return (
    <>
      {condicao ? (
        <div className="rounded-lg p-4 mb-4">
          <FaEdit
            className="cursor-pointer ml-2"
            onClick={handleAlterarCondicao} // Remova os parênteses aqui
          />
          <label htmlFor="nome">
            Nome:{" "}
            <input
              type="text"
              name="nome"
              className="mb-4 text-black"
              value={profissional.nome}
              onChange={(e) => {
                setProfissional((prevState) => ({
                  ...prevState,
                  nome: e.target.value,
                }));
              }}
            />
          </label>
          <label htmlFor="email">
            Email:{" "}
            <input
              name="email"
              type="text"
              className="mb-4 text-black"
              value={profissional.email}
              onChange={(e) => {
                setProfissional((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
            />
          </label>
          <label htmlFor="telefone">
            Telefone:{" "}
            <input
              name="telefone"
              type="text"
              className="mb-4 text-black"
              value={profissional.telefone}
              onChange={(e) => {
                setProfissional((prevState) => ({
                  ...prevState,
                  telefone: e.target.value,
                }));
              }}
            />
          </label>
          <select
            name="especialidade"
            className="mb-4 text-black"
            value={profissional.especialidade}
            onChange={(e) => {
              setProfissional((prevState) => ({
                ...prevState,
                especialidade: e.target.value,
              }));
            }}
          >
            <option value={Especialidade.SEGURANCA_CIBERNETICA}>
              Segurança Cibernética
            </option>
            <option value={Especialidade.DESENVOLVIMENTO_DE_SOFTWARE}>
              Desenvolvimento de Software
            </option>
            <option value={Especialidade.ANALISE_DE_DADOS}>
              Análise de Dados
            </option>
            <option value={Especialidade.INFRAESTRUTURA}>Infraestrutura</option>
            <option value={Especialidade.SUPORTE_TECNICO}>
              Suporte Técnico
            </option>
            <option value={Especialidade.DESIGN}>Design</option>
            <option value={Especialidade.MARKETING_DIGITAL}>
              Marketing Digital
            </option>
            <option value={Especialidade.DEVOPS}>DevOps</option>
            <option value={Especialidade.GESTAO_DE_TI}>Gestão de TI</option>
          </select>
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
          <div className="flex justify-between p-2">
            <div className="flex-col">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold mb-2">
                  {profissional.nome}{" "}
                  {/* Remova o elemento <h2> aninhado aqui */}
                </h2>
                <BiInfoCircle
                  title="Informações de contato"
                  className="cursor-pointer ml-2"
                  onClick={maisInformacoesF}
                />
                <BiSolidTrashAlt
                  className="cursor-pointer ml-2"
                  onClick={() => handleExcluir(profissional.id)}
                />
                <FaEdit
                  className="cursor-pointer ml-2"
                  onClick={handleAlterarCondicao}
                />
              </div>
              <p className="flex items-center">
                <BiMailSend /> {profissional.email}
              </p>
              <p>{formatarEspecialidade(profissional.especialidade)}</p>
              <p className="flex items-center">
                <BiPhone /> {profissional.telefone}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DadosPessoais;
