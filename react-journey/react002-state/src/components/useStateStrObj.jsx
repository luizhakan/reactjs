import React, { useState } from "react";

export default function useStateStrObj() {
  const [user, setUser] = useState({
    nome: "Luiz",
    pontos: 0,
  });

  function alterar() {
    setUser((userv2) => {
      return {
        ...userv2,
        pontos: userv2.pontos + 1,
      };
    });
  }

  return (
    <>
      <h1>React Hooks - useState Str Obj</h1>
      <hr />
      <h3>Nome : {user.nome}</h3>
      <h3>Pontos : {user.pontos}</h3>
      <button onClick={alterar}>Alterar</button>
    </>
  );
}
