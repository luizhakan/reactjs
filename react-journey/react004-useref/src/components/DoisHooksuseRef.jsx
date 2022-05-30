import React, { useState, useEffect, useRef } from "react";

export default function DoisHooksuseRef() {
  const [texto, setTexto] = useState("");
  const inputRef = useRef();

  const [texto2, setTexto2] = useState("");
  const inputRef2 = useRef();

  function executar() {
    inputRef.current.focus();
    console.log(texto);
  } 

  function executarD() {
    inputRef2.current.focus();
    console.log(texto2);
  }

  return (
    <>
      <h1>React Hooks - useRef</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        value={texto}
        onChange={(evento) => {
          setTexto(evento.target.value);
        }}
      />
      <hr />
      <p>
        O texto é: <strong>{texto}</strong>
      </p>
      <button onClick={executar}>Clicar</button>
      <br />
      <hr />
      <input
        ref={inputRef2}
        type="text"
        value={texto2}
        onChange={(evento) => {
          setTexto2(evento.target.value);
        }}
      />
      <br />
      <p>
          texto: {texto}
      </p>
      <button onClick={executarD}>Clicar</button>
    </>
  );
}
