import React, { useState } from "react";
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
  especialidade: Especialidade;
  telefone: string;
  maisInformacoesF: () => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [profissional, setProfissional] = useState({
    id,
    nome,
    email,
    especialidade,
    telefone,
  });

  const handleExcluir = () => {
    excluir(id);
    location.reload();
  };

  const formatarEspecialidade = (especialidade: Especialidade) => {
    const especialidades = {
      [Especialidade.SEGURANCA_CIBERNETICA]: "Segurança Cibernética",
      [Especialidade.DESENVOLVIMENTO_DE_SOFTWARE]:
        "Desenvolvimento de Software",
      [Especialidade.ANALISE_DE_DADOS]: "Análise de Dados",
      [Especialidade.INFRAESTRUTURA]: "Infraestrutura",
      [Especialidade.SUPORTE_TECNICO]: "Suporte Técnico",
      [Especialidade.DESIGN]: "Design",
      [Especialidade.MARKETING_DIGITAL]: "Marketing Digital",
      [Especialidade.DEVOPS]: "DevOps",
      [Especialidade.GESTAO_DE_TI]: "Gestão de TI",
    };

    return especialidades[especialidade] || "";
  };

  const handleAlterarCondicao = () => {
    setIsEditing(!isEditing);
  };

  const handleAlterarSalvar = () => {
    alterar(id, profissional);
    setIsEditing(false);
  };

  const handleAlterarProfissional = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setProfissional((prevProfissional) => ({
      ...prevProfissional,
      [name]: value,
    }));
  };

  return (
    <div className="rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-2">{profissional.nome}</h2>
        <BiInfoCircle
          title="Informações de contato"
          className="cursor-pointer ml-2"
          onClick={maisInformacoesF}
        />
        <BiSolidTrashAlt
          className="cursor-pointer ml-2"
          onClick={handleExcluir}
        />
        {isEditing ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAlterarSalvar}
          >
            Salvar
          </button>
        ) : (
          <FaEdit
            className="cursor-pointer ml-2"
            onClick={handleAlterarCondicao}
          />
        )}
      </div>
      {isEditing ? (
        <>
          <label htmlFor="nome">
            Nome:{" "}
            <input
              type="text"
              name="nome"
              className="mb-4 text-black"
              value={profissional.nome}
              onChange={handleAlterarProfissional}
            />
          </label>
          <label htmlFor="email">
            Email:{" "}
            <input
              name="email"
              type="text"
              className="mb-4 text-black"
              value={profissional.email}
              onChange={handleAlterarProfissional}
            />
          </label>
          <label htmlFor="telefone">
            Telefone:{" "}
            <input
              name="telefone"
              type="text"
              className="mb-4 text-black"
              value={profissional.telefone}
              onChange={handleAlterarProfissional}
            />
          </label>
          <select
            name="especialidade"
            className="mb-4 text-black"
            value={profissional.especialidade}
            onChange={handleAlterarProfissional}
          >
            {Object.values(Especialidade).map((especialidade) => (
              <option key={especialidade} value={especialidade}>
                {formatarEspecialidade(especialidade)}
              </option>
            ))}
          </select>
        </>
      ) : (
        <>
          <img
            src="http://lorempixel.com.br/150/150"
            alt={profissional.nome}
            className="w-full h-[150px]"
          />
          <p className="flex items-center">
            <BiMailSend /> {profissional.email}
          </p>
          <p>{formatarEspecialidade(profissional.especialidade)}</p>
          <p className="flex items-center">
            <BiPhone /> {profissional.telefone}
          </p>
        </>
      )}
    </div>
  );
}

export default DadosPessoais;
