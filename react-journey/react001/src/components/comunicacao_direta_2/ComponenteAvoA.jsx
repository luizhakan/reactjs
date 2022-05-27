import React from "react";
import ComponentePaiA from "./ComponentePaiA";

export default (props) => {
  return (
    <div className="componente">
      <p className="titulo">Titulo : {props.titulo}</p>
      <p>Avô</p>
      <ComponentePaiA nome="Luiz Hakan" />
    </div>
  );
};