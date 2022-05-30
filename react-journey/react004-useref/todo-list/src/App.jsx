import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [listaTarefas, setListaTarefas] = useState(() => {
    return [];
  });
  const [tarefa, setTarefa] = useState(() => {
    return "";
  });

  const idTarefa = useRef(0);
  const inputRef = useRef();

  // métodos
  const adicionarTarefa = () => {
    setListaTarefas((old) => {
      return [...old, { id: idTarefa.current, texto: tarefa }];
    });
    idTarefa.current++;
    console.log(listaTarefas);
    setTarefa("");
    inputRef.current.focus()
  };

  const limparTarefas = () => {
    setListaTarefas(() => {
      return [];
    });
    idTarefa.current = 0;
  };

  const removerTarefa = (id) => {
    const tmp = listaTarefas.filter((t) => t.id !== id);
    setListaTarefas(tmp);
    console.log(listaTarefas);
  };

  return (
    <>
      <h1>Gerenciador de Tarefas</h1 >
      <hr />
      <input
        ref={inputRef}
        type="text"
        value={tarefa}
        onChange={(e) => {
          setTarefa(e.target.value);
        }}
      />
      <div>
        <button onClick={adicionarTarefa}>Adicionar</button>
        <button onClick={limparTarefas}>Limpar tarefas</button>
      </div>
      <hr />
      <p>Tarefas : </p>
      {listaTarefas.map((t) => {
        return (
          <p key={t.id}>
            {t.texto} -{" "}
            <span
              onClick={() => {
                removerTarefa(t.id);
              }}
            >
              [x]
            </span>
          </p>
        );
      })}
    </>
  );
}

export default App;
