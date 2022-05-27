import React from "react";
import ComponenteF from "./ComponenteF";

export default (props) => {
  function executar(valor) {
      alert(valor)
  }

  return (
    <div className="componente">
      <p className="titulo">Titulo : {props.titulo}</p>
      <ComponenteF titulo="Filho" funcao={executar}/>
    </div>
  );
};
