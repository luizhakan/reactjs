import { useState } from "react";
import Nomes from "./components/Nomes";

export default function App() {
  const [nome, setNome] = useState('');
  const [nomes, setNomes] = useState([]);

  function guardarNome(){
    setNomes(tmp => [...tmp, nome]);
  }

  return (
    <>
      <h3>React Unique ID</h3>
      <hr />
      
      <input type="text" onChange={e => {setNome(e.target.value)}} value={nome} />
      <button onClick={guardarNome}>Guardar Nome</button>
      <Nomes nomes={nomes}/>
    </>
  );
}
