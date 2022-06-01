import { useState } from "react";

export default function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  }

  function limparEmail(e){
      e.preventDefault();
      setUserEmail('');
  }

  return (
    <>
      <h2>Cadastre seu email</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar email
        </button>
        {userEmail && (
            <div>
                <p>O e-mail do usuário é: {userEmail}</p>
                <span onClick={limparEmail}> [CLOSE] </span>
            </div>
        )}
      </form>
      <hr />
    </>
  );
}
