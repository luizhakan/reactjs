import React from "react";

const ComponenteSete = (props) => {
  return (
    <div className="componente">
      <p className="titulo">Titulo : {props.titulo}</p>
      {props.valor ? <p>Verdadeiro</p> : <p>Falso</p>}
    </div>
  );
};

export default ComponenteSete;
