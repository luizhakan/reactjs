import React, { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { alterar } from "../services/services";

function Endereco({
  id,
  logradouro,
  bairro,
  cidade,
  uf,
  cep,
  maisInformacoesF,
}: {
  id: number;
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  maisInformacoesF: () => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAddress, setEditedAddress] = useState({
    logradouro,
    bairro,
    cidade,
    uf,
    cep,
  });

  const handleAlterarEndereco = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleToggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSalvar = () => {
    const endereco = {
      id,
      endereco: editedAddress,
    };
    alterar(id, endereco);
    setIsEditing(false);
    location.reload();
  };

  return (
    <div className="rounded-lg p-4 mb-4">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-2">Endereço</h2>
          <BiInfoCircle
            title="Informações de contato"
            className="cursor-pointer ml-2"
            onClick={maisInformacoesF}
          />
          {isEditing ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSalvar}
            >
              Salvar
            </button>
          ) : (
            <FaEdit
              className="cursor-pointer ml-2"
              onClick={handleToggleEditing}
            />
          )}
        </div>
        <div className="md:flex md:flex-wrap">
          {isEditing ? (
            <>
              <div className="w-full md:w-1/2 pr-4 mb-4">
                <input
                  type="text"
                  name="logradouro"
                  className="block w-full border border-gray-300 rounded-md p-2"
                  value={editedAddress.logradouro}
                  onChange={handleAlterarEndereco}
                />
              </div>
              <div className="w-full md:w-1/2 pr-4 mb-4">
                <input
                  name="bairro"
                  type="text"
                  className="block w-full border border-gray-300 rounded-md p-2"
                  value={editedAddress.bairro}
                  onChange={handleAlterarEndereco}
                />
              </div>
              <div className="w-full md:w-1/2 pr-4 mb-4">
                <input
                  name="cidade"
                  type="text"
                  className="block w-full border border-gray-300 rounded-md p-2"
                  value={editedAddress.cidade}
                  onChange={handleAlterarEndereco}
                />
              </div>
              <div className="w-full md:w-1/2 pr-4 mb-4">
                <input
                  name="uf"
                  type="text"
                  className="block w-full border border-gray-300 rounded-md p-2"
                  value={editedAddress.uf}
                  onChange={handleAlterarEndereco}
                />
              </div>
              <div className="w-full md:w-1/2 pr-4 mb-4">
                <input
                  name="cep"
                  type="text"
                  className="block w-full border border-gray-300 rounded-md p-2"
                  value={editedAddress.cep}
                  onChange={handleAlterarEndereco}
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-1/2 pr-4 mb-4">
                <p className="mb-4">Logradouro: {logradouro}</p>
                <p className="mb-4">Bairro: {bairro}</p>
                <p className="mb-4">Cidade: {cidade}</p>
                <p className="mb-4">UF: {uf}</p>
                <p className="mb-4">CEP: {cep}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Endereco;
