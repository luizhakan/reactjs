import "./app.css";
import Primeiro from "./components/Primeiro.jsx";
import ComParametro from "./components/ComParametro.jsx";
import ComFilhos from "./components/ComFilhos.jsx";
import Card from "./components/layout/Card.jsx";
import Repeticao from "./components/Repeticao.jsx";
import Condicional from "./components/Condicional.jsx";
import CondicionalComIf from "./components/CondicionalComIf.jsx";

const App = () => {
  return (
    <div className="App">
      {/* <ComFilhos cria="Luiz Hakan" /> */}
      <Card titulo="Exercicio z">Crias</Card>
      <Card titulo="#01 Primeiro componente">
        <Primeiro />
      </Card>

      <Card titulo="#02 Com parametros">
        <ComParametro titulo="Luiz Hakan Title" subtitulo="esmeralda type" />
      </Card>

      <Card titulo="#03 Com parametros">
        <ComParametro
          titulo="Se eu piscar, os invejosos caem"
          subtitulo="muito brilho no meu pulso"
        />
      </Card>

      <Card titulo="#04 Repeticao">
        <Repeticao />
      </Card>

      <Card titulo="#05 Condicional v1">
        <Condicional numero={10} />
      </Card>

      <Card titulo="#06 Condicional com If v2">
        <CondicionalComIf numero={11} />
      </Card>
    </div>
  );
};

export default App;
