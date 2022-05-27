import React from "react";

export default (props) => (
  <div className="componente">
    <p className="titulo">Titulo : {props.titulo}</p>
    <p>Cargo: {props.cargo} - {props.children}</p>
  </div>
);
