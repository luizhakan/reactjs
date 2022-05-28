import React, { useState } from "react";

export default function ZeroDoisHooks() {
  const [valor, setValor] = useState(0);

  const subtrair = () => {
    return setValor(valor - 1);
  };

  const somar = () =>{
      return setValor(valor + 1);
  }

  return (
    <>
      <h1>React Hooks v2</h1>
      <p>Valor : {valor}</p>
      <button onClick={subtrair}>Subtrair</button>
      <button onClick={somar}>Somar</button>
    </>
  );
}
