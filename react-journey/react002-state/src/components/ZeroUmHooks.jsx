import React, { useState } from "react";

export default function ZeroUmHooks() {
  const [valor, setValor] = useState(0);

  const adicionar = () => {
    setValor(valor + 1);
  };

  return (
    <>
      <h1>React HOOKS</h1>
      <h3>Valor = {valor}</h3>
      <button onClick={adicionar}>Adicionar</button>
    </>
  );
}
