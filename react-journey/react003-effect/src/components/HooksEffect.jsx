import React, {useState, useEffect} from "react";

export default function HooksEffect() {
  const [valor, setValor] = useState(() => {
    return 0;
  });
  const [valor2, setValor2] = useState(() => {
    return 10;
  });

  const alterar = () => {
    setValor(valor + Math.random());
  };

  const alterar2 = () => {
    setValor2(valor2 + 10);
  };

  useEffect(() => {
    console.log("alterado");
  }, [valor]);

  return (
    <div>
      <h1>React Hooks - useEffect</h1>
      <h3>Valor : {valor}</h3>
      <h3>Valor : {valor2}</h3>
      <button onClick={alterar}>Alterar</button>
      <button onClick={alterar2}>Alterar</button>
    </div>
  );
}
