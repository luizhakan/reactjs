import { useState } from "react";
import { ProfissionalCadastro } from "../interface/ProfissionalCadastro";
import { Especialidade } from "../enum/Especialidades";
import { cadastrar } from "../service/services";

function CadastrarProfissional() {
  const [cancelar, setCancelar] = useState(false);
  const [profissionais, setProfissionais] = useState<ProfissionalCadastro>({
    nome: "",
    email: "",
    telefone: "",
    registro: "",
    especialidade: "",
    endereco: {
      logradouro: "",
      bairro: "",
      cidade: "",
      uf: "",
      complemento: "",
      cep: "",
      numero: "",
    },
  });

  function handleSalvar() {
    cadastrar(profissionais);
    setCancelar(true);
  }

  return (
    <div className="text-white p-8">
      <h1>Cadastrar Profissional</h1>
      <div className="campos-dados-contato flex flex-col bg-inherit">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          className="bg-inherit"
          onChange={(e) =>
            setProfissionais((prevState) => ({
              ...prevState,
              nome: e.target.value,
            }))
          }
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="bg-inherit"
          onChange={(e) =>
            setProfissionais((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
        <input
          type="text"
          name="telefone"
          className="bg-inherit"
          placeholder="Fone"
          onChange={(e) =>
            setProfissionais((prevState) => ({
              ...prevState,
              telefone: e.target.value,
            }))
          }
        />
        <input
          type="text"
          name="registro"
          placeholder="Registro"
          className="bg-inherit"
          onChange={(e) =>
            setProfissionais((prevState) => ({
              ...prevState,
              registro: e.target.value,
            }))
          }
        />
        <select
          name="especialidade"
          className="text-black"
          onChange={(e) =>
            setProfissionais((prevState) => ({
              ...prevState,
              especialidade: e.target.value,
            }))
          }
        >
          <option className="bg-inherit" value="">
            Especialidade
          </option>
          <option
            className="bg-inherit"
            value={Especialidade.SEGURANCA_CIBERNETICA}
          >
            Segurança Cibernética
          </option>
          <option
            className="bg-inherit"
            value={Especialidade.DESENVOLVIMENTO_DE_SOFTWARE}
          >
            Desenvolvimento de Software
          </option>
          <option className="bg-inherit" value={Especialidade.ANALISE_DE_DADOS}>
            Análise de Dados
          </option>
          <option className="bg-inherit" value={Especialidade.INFRAESTRUTURA}>
            Infraestrutura
          </option>
          <option className="bg-inherit" value={Especialidade.SUPORTE_TECNICO}>
            Suporte Técnico
          </option>
          <option className="bg-inherit" value={Especialidade.DESIGN}>
            Design
          </option>
          <option
            className="bg-inherit"
            value={Especialidade.MARKETING_DIGITAL}
          >
            Marketing Digital
          </option>
          <option className="bg-inherit" value={Especialidade.DEVOPS}>
            DevOps
          </option>
          <option className="bg-inherit" value={Especialidade.GESTAO_DE_TI}>
            Gestão de TI
          </option>
        </select>
      </div>

      <div className="campos-endereco mt-4 pl-2 flex flex-col bg-inherit">
        <input
          type="text"
          name="logradouro"
          placeholder="Logradouro"
          className="bg-inherit"
          onChange={(e) =>
            setProfissionais((prevState) => ({
              ...prevState,
              endereco: {
                ...prevState.endereco,
                logradouro: e.target.value,
              },
            }))
          }
        />
        <input
          type="text"
          name="bairro"
          placeholder="Bairro"
          className="bg-inherit"
          onChange={(e) =>
            setProfissionais((prevState) => ({
              ...prevState,
              endereco: {
                ...prevState.endereco,
                bairro: e.target.value,
              },
            }))
          }
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          className="bg-inherit"
          onChange={(e) =>
            setProfissionais((prevState) => ({
              ...prevState,
              endereco: {
                ...prevState.endereco,
                cidade: e.target.value,
              },
            }))
          }
        />
        <input
          type="text"
          name="uf"
          placeholder="UF"
          className="bg-inherit"
          onChange={(e) =>
            setProfissionais((prevState) => ({
              ...prevState,
              endereco: {
                ...prevState.endereco,
                uf: e.target.value,
              },
            }))
          }
        />
        <input
          type="text"
          name="complemento"
          placeholder="Complemento"
          className="bg-inherit"
          onChange={(e) =>
            setProfissionais((prevState) => ({
              ...prevState,
              endereco: {
                ...prevState.endereco,
                complemento: e.target.value,
              },
            }))
          }
        />
        <input
          type="text"
          name="cep"
          placeholder="CEP"
          className="bg-inherit"
          onChange={(e) =>
            setProfissionais((prevState) => ({
              ...prevState,
              endereco: {
                ...prevState.endereco,
                cep: e.target.value,
              },
            }))
          }
        />
        <input
          type="text"
          name="numero"
          placeholder="Número"
          className="bg-inherit"
          onChange={(e) =>
            setProfissionais((prevState) => ({
              ...prevState,
              endereco: {
                ...prevState.endereco,
                numero: e.target.value,
              },
            }))
          }
        />
      </div>

      <button
        onClick={() => setCancelar(!cancelar)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Cancelar
      </button>

      <button
        onClick={handleSalvar}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Salvar
      </button>
    </div>
  );
}

export default CadastrarProfissional;
