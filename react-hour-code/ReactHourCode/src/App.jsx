import OutraLista from "./components/OutraLista";

function App() {
  const meusItens = ["React", "Vue", "Angular"];


  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;