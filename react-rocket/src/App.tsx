import { useState } from "react";
import "./components/estilo/App.css";
import { Tweet } from "./components/Tweet";
import { Carrinho } from "./pages/Carrinho";
import { Catalogos } from "./pages/Catalogos";
import { AppRoutes } from "./Routes";

function App() {
  // const [tweets, setTweets] = useState<string[]>([
  //   "Tweet 1",
  //   "Tweet 2",
  //   "Tweet 3",
  //   "Tweet 4",
  // ]);

  // const createTweet = () => {
  //   setTweets([...tweets, "Tweet 5"]);
  // };

  return (
    <div className="App">
      {/* {tweets.map((tweet) => {
        return (
          <div>
            <p>
              <Tweet text={tweet} />
            </p>
          </div>
        );
      })}

      <button
        style={{
          background: "purple",
          color: "aquamarine",
          border: 0,
          padding: "6px 12px",
        }}
        onClick={createTweet}
      >
        Adicionar Tweet
      </button>
      <Catalogos />
      <Carrinho /> */}
      <AppRoutes />
    </div>
  );
}

export default App;
