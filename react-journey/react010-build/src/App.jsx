import { useState } from "react";

export default function App() {
  const [valor, setValor] = useState(() => {
    return 0;
  });

  return (
    <div>
      <h1>React - Build</h1>
      <hr />
      <p>
        Valor: <strong>{valor}</strong>
      </p>
      <button onClick={() => setValor(valor + 1)}>Adicionar</button>
      <button onClick={() => setValor(valor - 1)}>Remover</button>
    </div>
  );
}
