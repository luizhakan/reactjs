import React, { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { alterar } from "../service/services";

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
    setIsEditing(!isEditing);
    location.reload();
  };

  return (
    <div>
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
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
        {isEditing ? (
          <>
            <input
              type="text"
              name="logradouro"
              className="mb-4 text-black"
              value={editedAddress.logradouro}
              onChange={handleAlterarEndereco}
            />
            <input
              name="bairro"
              type="text"
              className="mb-4 text-black"
              value={editedAddress.bairro}
              onChange={handleAlterarEndereco}
            />
            <input
              name="cidade"
              type="text"
              className="mb-4 text-black"
              value={editedAddress.cidade}
              onChange={handleAlterarEndereco}
            />
            <input
              name="uf"
              type="text"
              className="mb-4 text-black"
              value={editedAddress.uf}
              onChange={handleAlterarEndereco}
            />
            <input
              name="cep"
              type="text"
              className="mb-4 text-black"
              value={editedAddress.cep}
              onChange={handleAlterarEndereco}
            />
          </>
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
    </div>
  );
}

export default Endereco;
