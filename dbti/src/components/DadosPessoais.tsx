import { useState } from "react";
import {
  BiInfoCircle,
  BiMailSend,
  BiPhone,
  BiSolidTrashAlt,
} from "react-icons/bi";
import { excluir } from "../service/services";
import { Especialidade } from "../enum/Especialidades";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [profissional, setProfissional] = useState({
    id: id,
    nome: nome,
    email: email,
    especialidade: especialidade,
    telefone: telefone,
  });

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

  return (
    <div>
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
              <h2>{profissional.nome}</h2>
            </h2>
            <BiInfoCircle
              title="Informações de contato"
              className="cursor-pointer ml-2"
              onClick={maisInformacoesF} // Chame a função como uma propriedade
            />
            <BiSolidTrashAlt
              className="cursor-pointer ml-2"
              onClick={() => handleExcluir(profissional.id)}
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
    </div>
  );
}

export default DadosPessoais;
