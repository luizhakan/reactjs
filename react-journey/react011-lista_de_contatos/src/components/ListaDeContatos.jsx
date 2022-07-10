export default function ListaDeContatos({ nome, telefone, id, remover }) {
  return (
    <div>
      {nome} - {telefone} <span onClick={() => {
        remover(id)
      }}>[x]</span>
    </div>
  );
}
