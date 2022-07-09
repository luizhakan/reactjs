export default function ListaDeContatos({ nome, telefone, chave, remover }) {
  return (
    <div chave={chave}>
      {nome} - {telefone} <span onClick={() => {
        remover({nome: nome, telefone: telefone})
      }}>[x]</span>
    </div>
  );
}
