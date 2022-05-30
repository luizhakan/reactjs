import React, { useState, useEffect, useRef } from "react";

export default function UmHooksuseRef() {
  const [texto, setTexto] = useState("");
  const total = useRef(1);
  console.log(total);

  useEffect(() => {
    console.log(texto);
    total.current++;
  }, [texto]);

  return (
    <>
      <h1>React Hooks - useRef</h1>
      <hr />
      <input
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
      <hr />
      <p>
        Total : <strong>{total.current}</strong>
      </p>
    </>
  );
}
