import React, { useState, useEffect } from "react";

export default function HooksEffectDois() {
  const clientes = ["João", "Ana", "Carlos"];
  const produtos = ["Pão", "Manteiga", "Leite"];
  const vendas = ["1x Pão (João)", "2x Manteiga", "3x Leite (Carlos)"];

  const [info, setInfo] = useState(() => {
    return "clientes";
  });
  const [valor, setValor] = useState(() => {
    return 0;
  });

  useEffect(() => {
    console.clear();
    switch (info) {
      case "clientes":
        console.table(clientes);
        break;
      case "produtos":
        console.table(produtos);
        break;
      case "vendas":
        console.table(vendas);
        break;
    }
  }, [info]);

  useEffect(() => {
    console.clear();
    console.log(`Adicionado ${valor} neste item`);
  }, [valor]);

  return (
    <>
      <h1>React Hooks - useEffect</h1>
      <hr />
      <button onClick={() => setInfo("clientes")}>Clientes</button>
      <button onClick={() => setInfo("produtos")}>Produtos</button>
      <button onClick={() => setInfo("vendas")}>Vendas</button>
      <h3>{info}</h3>
      <hr />
      <h3>Valor : {valor}</h3>
      <button onClick={() => setValor(valor + 10)}>Aumentar</button>
    </>
  );
}
