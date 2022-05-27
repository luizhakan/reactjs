import React from "react";
import ComponenteFilha from "./ComponenteFilha";

export default (props) => {
  function clicou() {
    alert("botão da filha foi clicado!");
  }

  return (
    <div className="componente">
      <p className="titulo">Titulo : {props.titulo}</p>
      <ComponenteFilha
        titulo="Componente filha"
        click={clicou}
      ></ComponenteFilha>
    </div>
  );
};
