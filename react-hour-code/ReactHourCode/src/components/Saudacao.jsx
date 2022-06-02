// state lift é centralizar o state no pai e alterar o state no filho

export default function Saudacao({ nome }) {
  function gerarSaudacao(algumNome) {
    return `Olá, ${algumNome}. tudo bem?`;
  }

  return (
    <>
      {nome && <p>{gerarSaudacao(nome)}</p>}{" "}
      {/*Renderização condicional(se nome for preenchido, gere esse parágrafo) */}
    </>
  );
}
