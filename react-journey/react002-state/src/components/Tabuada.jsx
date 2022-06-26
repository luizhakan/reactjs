import {v4 as uuid} from "uuid";
import { useState } from "react";

export default function Tabuada() {
  const [valor, setValor] = useState(() => {
    1;
  });

  const multiplicar = ()=>{
    if(isNaN(valor)){return []}
    let produtos = [];

    for(let m = 1; m <= 10; m++){
        produtos.push(`${valor} x ${m} = ${valor * m}`);
    }
    return produtos;
  }

  return (
    <>
      <h1>Tabuada</h1>
      <hr />
      <input type="number" onChange={(e) => setValor(parseInt(e.target.value))} />
      {multiplicar().map(item => <p key={uuid()}>{item}</p>)}
      <hr />
    </>
  );
}
