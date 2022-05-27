import React from "react";

export default (props) => {
  const estilos = {
    color: "red",
    fontFamily: "Times New Roman",
    fontWeight: 900,
    backgroundColor: "purple",
  };

  return (
    <div className="componente">
      <p className="titulo">Título : {props.titulo}</p>
      <p>Texto sem css</p>
      <p
        style={estilos}
      >
        Texto com css
      </p>
    </div>
  );
};
