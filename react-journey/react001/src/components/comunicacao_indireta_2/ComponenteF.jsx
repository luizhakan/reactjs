import React from "react";

export default (props) => (
  <div className="componente">
    <p className="titulo">Titulo : {props.titulo}</p>
    <button onClick={() => {
        props.funcao('Valor : ' + Math.random(Math.floor()))
    }}>Executar</button>
  </div>
);
