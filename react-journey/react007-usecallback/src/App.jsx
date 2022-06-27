import "./App.css";
import Lista from "./components/Lista";

import { useState, useCallback } from "react";

function App() {
  const [numero, setNumero] = useState(() => {
    return 0;
  });
  const [dark, setTemaDark] = useState(() => {
    return false;
  });

  // função para calcular lista de resultados
  const resultados = useCallback(() => {
    return [numero * 2, numero * 3, numero * 4];
  }, [numero]);

  const tema = {
    backgroundColor: dark ? "rgb(255, 255, 255)" : "#222",
    color: dark ? "aquamarine" : "wheat",
    textAlign: "center",
  };

  return (
    <div style={tema}>
      <h1>React JS - Hooks - useCallback</h1>
      <hr />
      <button onClick={() => setTemaDark((oldTemaDark) => !oldTemaDark)}>
        Alterar Tema
      </button>
      <hr />
      <p>Número : {numero}</p>
      <button onClick={() => setNumero(numero + 1)}>Adicionar</button>
      <hr />
      <Lista resultados={resultados} />
    </div>
  );
}

export default App;
