import "./App.css";
import ComponenteCinco from "./components/ComponenteCinco";
import ComponenteDez from "./components/ComponenteDez";
import { ComponenteDois } from "./components/ComponenteDois";
import ComponenteNove from "./components/ComponenteNove";
import ComponenteOito from "./components/ComponenteOito";
import ComponenteQuatro from "./components/ComponenteQuatro";
import ComponenteSeis from "./components/ComponenteSeis";
import ComponenteSete from "./components/ComponenteSete";
import ComponenteTres from "./components/ComponenteTres";
// import { Comments } from "./components/Comments";
import { ComponenteUm } from "./components/ComponenteUm";
import ComponentePai from "./components/comunicacao_direta/ComponentePai";
import ComponenteAvoA from "./components/comunicacao_direta_2/ComponenteAvoA";
import ComponenteMae from "./components/comunicacao_indireta/ComponenteMae";
import ComponenteP from "./components/comunicacao_indireta_2/ComponenteP";

export function App() {
  return (
    <>
      <h1>Olá!</h1>
      {/* <Comments
        title="Item 1"
        comentario="Olá pessoas, tudo bem com vocês?"
        autor="Luiz Hakan"
      />
      <Comments
        title="Item 2"
        comentario="O canal preferido do Mr Beast"
        autor="Luiz Hakan"
      /> */}
      {/* <ComponenteUm />
      <ComponenteDois />
      <ComponenteTres title="Componente Arrow Function" subtitle="subtitulo" />
      <ComponenteQuatro title="Componente 4">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </ComponenteQuatro> */}
      {/* <ComponenteSeis /> */}
      {/* <ComponenteSete titulo="Componente sete" valor={true} />
      <ComponenteOito titulo="Componente oito" valor={9} />
      <ComponenteNove titulo="Componente nove" valor={10} /> */}
      {/* <ComponenteDez titulo="Componente dez" corText="white"/> */}
      {/* <ComponentePai titulo="Comunicação direta"></ComponentePai> */}
      {/* <ComponenteMae titulo="Comunicação indireta"/> */}
      {/* <ComponenteP titulo="Comunicação indireta v2"></ComponenteP> */}
      <ComponenteAvoA titulo="Comunicação direta v2" />
    </>
  );
}
