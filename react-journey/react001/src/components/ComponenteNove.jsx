import React from "react";
import CondicaoIf from "./CondicaoIf";

const ComponenteNove = (props) => {
  return (
    <div className="componente">
      <p className="titulo">{props.titulo}</p>

      <CondicaoIf condicao={props.valor === 10} />
    </div>
  );
};

export default ComponenteNove;
