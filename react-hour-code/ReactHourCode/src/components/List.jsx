import Item from "./Item";

export default function List() {
  return (
    <>
      <h2>Lista</h2>
      <ul>
        <Item marca="Lamborghini" lancamento={2022} />
        <Item marca="Ferrari" lancamento={2021}/>
        <Item />
      </ul>
    </>
  );
}
