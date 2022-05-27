import React from "react";

export default (props) => (
  <div className="componente">
    <p className="titulo">Titulo : {props.titulo}</p>
    <button onClick={props.click}>Clique</button>
  </div>
);
