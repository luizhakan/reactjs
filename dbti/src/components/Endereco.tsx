import { useState } from "react";
import { alterar } from "../service/services";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Endereco({ id, logradouro, bairro, cidade, uf, cep, condicao }: any) {
  const [edicaoEnderecoProfissional, setEdicaoEnderecoProfissional] = useState({
    id: id,
    logradouro: logradouro,
    bairro: bairro,
    cidade: cidade,
    uf: uf,
    cep: cep,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAlterarEndereco = (e: any) => {
    const { name, value } = e.target;

    setEdicaoEnderecoProfissional((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const endereco = {
    id: id,
    endereco: {
      logradouro: edicaoEnderecoProfissional.logradouro,
      bairro: edicaoEnderecoProfissional.bairro,
      cidade: edicaoEnderecoProfissional.cidade,
      uf: edicaoEnderecoProfissional.uf,
      cep: edicaoEnderecoProfissional.cep,
    },
  };
  
  if (!condicao) {
    alterar(id, endereco);
  }

  return (
    <div>
      {condicao ? (
        <div className="flex flex-col">
          <input
            type="text"
            name="logradouro"
            className="mb-4 text-black"
            value={edicaoEnderecoProfissional.logradouro}
            onChange={handleAlterarEndereco}
          />
          <input
            name="bairro"
            type="text"
            className="mb-4 text-black"
            value={edicaoEnderecoProfissional.bairro}
            onChange={handleAlterarEndereco}
          />
          <input
            name="cidade"
            type="text"
            className="mb-4 text-black"
            value={edicaoEnderecoProfissional.cidade}
            onChange={handleAlterarEndereco}
          />
          <input
            name="uf"
            type="text"
            className="mb-4 text-black"
            value={edicaoEnderecoProfissional.uf}
            onChange={handleAlterarEndereco}
          />
          <input
            name="cep"
            type="text"
            className="mb-4 text-black"
            value={edicaoEnderecoProfissional.cep}
            onChange={handleAlterarEndereco}
          />
        </div>
      ) : (
        <>
          <p className="mb-4">Logradouro: {logradouro}</p>
          <p className="mb-4">Bairro: {bairro}</p>
          <p className="mb-4">Cidade: {cidade}</p>
          <p className="mb-4">UF: {uf}</p>
          <p className="mb-4">CEP: {cep}</p>
        </>
      )}
    </div>
  );
}

export default Endereco;
