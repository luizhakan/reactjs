import React from "react";
import ComponenteFilho from "./ComponenteFilho";

export default (props) => (
  <div className="componente">
    <p className="titulo">Titulo : {props.titulo}</p>
    <p>Pai</p>
    <ComponenteFilho titulo="Componente filho" cargo="admin">
        Luiz Hakan
    </ComponenteFilho>
    <ComponenteFilho titulo="Componente filho" cargo="moderador">
        Kaio Gomes
    </ComponenteFilho>
        <ComponenteFilho titulo="Componente filho" cargo="moderador">
        João Victor
    </ComponenteFilho>
  </div>
);
