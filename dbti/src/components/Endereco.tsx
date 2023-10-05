import React, { useState } from "react";

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

  console.log(edicaoEnderecoProfissional);

  return (
    <div>
      {condicao ? (
        <div className="flex flex-col">
          <input
            type="text"
            className="mb-4 text-black"
            value={logradouro}
            onChange={(e) => {
              setEdicaoEnderecoProfissional((prevState) => ({
                ...prevState,
                logradouro: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            className="mb-4 text-black"
            value={bairro}
            onChange={(e) => {
              setEdicaoEnderecoProfissional((prevState) => ({
                ...prevState,
                bairro: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            className="mb-4 text-black"
            value={cidade}
            onChange={(e) => {
              setEdicaoEnderecoProfissional((prevState) => ({
                ...prevState,
                cidade: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            className="mb-4 text-black"
            value={uf}
            onChange={(e) => {
              setEdicaoEnderecoProfissional((prevState) => ({
                ...prevState,
                uf: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            className="mb-4 text-black"
            value={cep}
            onChange={(e) => {
              setEdicaoEnderecoProfissional((prevState) => ({
                ...prevState,
                cep: e.target.value,
              }));
            }}
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
