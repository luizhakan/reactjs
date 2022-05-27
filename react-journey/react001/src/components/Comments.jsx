import React from "react";
import "./Comments.css";

export function Comments(props) {
    let teste = "12345";

    const Maiusculas = (texto)=>{
        return texto.toUpperCase();
    }

  return (
    <>
      <section className="Comments">
        <br />
        <h4>{Maiusculas(props.title)}</h4>
        <p>{props.comentario}</p>
        <br />
        <br />
        <p id="autor">Autor : {props.autor}</p>
        {teste}
      </section>
      <br />
    </>
  );
}
