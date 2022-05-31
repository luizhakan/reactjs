export default function Pessoa({nome, idade, profissao, foto}) {
  return (
    <>
      <img src={foto} />
      <h2><code>Nome : {nome}</code></h2>
      <p>Idade : {idade}</p>
      <p>Profissão : {profissao}</p>
    </>
  );
}
