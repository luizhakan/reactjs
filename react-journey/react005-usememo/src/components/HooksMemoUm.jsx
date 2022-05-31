import { useState, useEffect, useMemo } from "react";

export default function HooksMemoUm() {
  const [valor, setValor] = useState(() => {
    return 0;
  });

  const [numero, setNumero] = useState(() => {
    return 100;
  });

  //   const valorCalculado = funcaoDemorada(valor);
  const valorCalculado = useMemo(() => {
    return funcaoDemorada(valor);
  }, [valor]);

  useEffect(() => {
    console.log("renderizou");
  }, []);

  function funcaoDemorada(num) {
    for (let i = 0; i < 100000000; i++) {}

    return num * 2;
  }

  return (
    <>
      <h1>React Hooks - useMemo</h1>
      <hr />
      <p>Valor : {valor}</p>
      <p>Valor calculado : {valorCalculado}</p>
      <p>Numero : {numero}</p>
      <button
        onClick={() => {
          setValor((oldvalor) => oldvalor + 1);
        }}
      >
        Adicionar
      </button>
      <button
        onClick={() => {
          setNumero((oldNumero) => oldNumero + 100);
        }}
      >
        Adicionar 2
      </button>
    </>
  );
}
