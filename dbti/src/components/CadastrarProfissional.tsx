import { useState } from "react";
import { ProfissionalCadastro } from "../interface/ProfissionalCadastro";
import { Especialidade } from "../enum/Especialidades";
import { cadastrar } from "../service/services";
import validator from "validator";

function CadastrarProfissional() {
  const [cancelar, setCancelar] = useState(false);

  const [dadosPessoais, setDadosPessoais] = useState<ProfissionalCadastro>({
    nome: "",
    email: "",
    telefone: "",
    registro: "",
    especialidade: Especialidade.SEGURANCA_CIBERNETICA,
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

  const [endereco, setEndereco] = useState({
    logradouro: "",
    bairro: "",
    cidade: "",
    uf: "",
    complemento: "",
    cep: "",
    numero: "",
  });

  const regexNove = /^[0-9]{9}$/;
  const regexDez = /^[0-9]{10}$/;
  const regexUf = /^[a-zA-Z]{2}$/;

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

  function handleSalvar() {
    if (validarCampos()) {
      const profissional = {
        ...dadosPessoais,
        endereco,
      };
      cadastrar(profissional);
      console.log(profissional);
      setCancelar(true);
    }
  }

  function validarCampos(): boolean {
    if (!validator.isEmail(dadosPessoais.email)) {
      alert("Email inválido");
      return false;
    }

    if (!regexNove.test(dadosPessoais.telefone)) {
      alert("Telefone inválido");
      return false;
    }

    if (!regexNove.test(dadosPessoais.registro)) {
      alert("Registro inválido");
      return false;
    }

    if (!regexUf.test(endereco.uf)) {
      alert("UF inválido, deve ter 2 dígitos e apenas letras");
      return false;
    }

    if (!regexDez.test(endereco.cep)) {
      alert("CEP inválido, deve ter 10 dígitos e apenas números");
      return false;
    }

    return true;
  }

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl mb-4">Cadastrar Profissional</h1>
      <div className="campos-dados-contato flex flex-col bg-inherit space-y-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          className="bg-inherit p-2"
          value={dadosPessoais.nome}
          onChange={(e) =>
            setDadosPessoais({ ...dadosPessoais, nome: e.target.value })
          }
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="bg-inherit p-2"
          value={dadosPessoais.email}
          onChange={(e) =>
            setDadosPessoais({ ...dadosPessoais, email: e.target.value })
          }
        />
        <input
          type="text"
          name="telefone"
          className="bg-inherit p-2"
          placeholder="Telefone"
          value={dadosPessoais.telefone}
          maxLength={9}
          minLength={9}
          onChange={(e) =>
            setDadosPessoais({ ...dadosPessoais, telefone: e.target.value })
          }
        />
        <input
          type="text"
          name="registro"
          placeholder="Registro"
          className="bg-inherit p-2"
          value={dadosPessoais.registro}
          maxLength={9}
          minLength={9}
          onChange={(e) =>
            setDadosPessoais({ ...dadosPessoais, registro: e.target.value })
          }
        />
        <label htmlFor="especialidade">Especialidade:</label>
        <select
          name="especialidade"
          className="text-black p-2"
          value={dadosPessoais.especialidade}
          onChange={(e) =>
            setDadosPessoais({
              ...dadosPessoais,
              especialidade: e.target.value as Especialidade,
            })
          }
        >
          {Object.values(Especialidade).map((especialidade) => (
            <option
              key={especialidade}
              value={especialidade}
              className="bg-inherit"
            >
              {formatarEspecialidade(especialidade)}
            </option>
          ))}
        </select>
      </div>

      <div className="campos-endereco mt-4 pl-2 flex flex-col bg-inherit space-y-4">
        <input
          type="text"
          name="logradouro"
          placeholder="Logradouro"
          className="bg-inherit p-2"
          value={endereco.logradouro}
          onChange={(e) =>
            setEndereco({ ...endereco, logradouro: e.target.value })
          }
        />
        <input
          type="text"
          name="bairro"
          placeholder="Bairro"
          className="bg-inherit p-2"
          value={endereco.bairro}
          onChange={(e) => setEndereco({ ...endereco, bairro: e.target.value })}
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          className="bg-inherit p-2"
          value={endereco.cidade}
          onChange={(e) => setEndereco({ ...endereco, cidade: e.target.value })}
        />
        <input
          type="text"
          name="uf"
          placeholder="UF"
          className="bg-inherit p-2"
          value={endereco.uf}
          maxLength={2}
          minLength={2}
          onChange={(e) =>
            setEndereco({ ...endereco, uf: e.target.value.toUpperCase() })
          }
        />
        <input
          type="text"
          name="complemento"
          placeholder="Complemento"
          className="bg-inherit p-2"
          value={endereco.complemento}
          onChange={(e) =>
            setEndereco({ ...endereco, complemento: e.target.value })
          }
        />
        <input
          type="text"
          name="cep"
          placeholder="CEP"
          className="bg-inherit p-2"
          value={endereco.cep}
          maxLength={10}
          minLength={10}
          onChange={(e) => setEndereco({ ...endereco, cep: e.target.value })}
        />
        <input
          type="text"
          name="numero"
          placeholder="Número"
          maxLength={5}
          minLength={5}
          className="bg-inherit p-2"
          value={endereco.numero}
          onChange={(e) => setEndereco({ ...endereco, numero: e.target.value })}
        />
      </div>

      <div className="mt-4 space-x-4">
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
    </div>
  );
}

export default CadastrarProfissional;
