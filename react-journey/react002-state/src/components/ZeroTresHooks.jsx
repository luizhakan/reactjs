import React, { useState } from "react";

export default function ZeroTresHooks() {
  const [valor, setValor] = useState(() => {
    return 0;
  });

  return (
    <>
      <h1>React Hooks - useState</h1>
      <h3>Valor : {valor}</h3>
      <button
        onClick={() => {
          setValor(valor - 1);
        }}
      >
        Subtrair v2
      </button>
      <button
        onClick={() => {
          setValor(valor + 1);
        }}
      >
        Somar v2
      </button>
    </>
  );
}
