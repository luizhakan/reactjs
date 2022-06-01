import { useState } from "react";

export default function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Cadastrou o usuário : ${nome}`);
    console.log(`Senha : ${password}`)
  }

  const [nome, setNome] = useState(() => {
    return "luizhakan.py";
  });
  const [password, setPassword] = useState(() => {
    return "senha";
  });

  return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Usuário:</label>
          <input
            type="text"
            name="name"
            placeholder="Usuário"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input type="password" name="senha" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}
