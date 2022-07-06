import { useState, useRef, useEffect } from "react";
import ListaDeContatos from "./components/ListaDeContatos";
import { v4 as uuid } from "uuid";

export default function App() {
  const [contato, setContato] = useState({ nome: "", telefone: "" });
  const [listaDeContatos, setListaDeContatos] = useState([]);

  const inputNome = useRef();
  const inputTelefone = useRef();

  // atualizar a lista de contatos no localStorage
  useEffect(() => {
    if (localStorage.getItem("meus_contatos") !== null) {
      setListaDeContatos(JSON.parse(localStorage.getItem("meus_contatos")));
    }
  }, []);

  // persistência do state
  useEffect(() => {
    localStorage.setItem("meus_contatos", JSON.stringify(listaDeContatos));
  }, [listaDeContatos]);

  return (
    <>
      <h1>React JS - Lista de contatos</h1>
      <hr />
      <div>
        <label>Nome</label>
        <br />
        <input
          ref={inputNome}
          type="text"
          onChange={(e) => {
            setContato({ ...contato, nome: e.target.value });
          }}
          value={contato.nome}
          required
          placeholder="Nome"
        />
      </div>
      <label>Telefone</label>
      <br />
      <div>
        <input
          ref={inputTelefone}
          type="text"
          onChange={(e) => {
            setContato({ ...contato, telefone: e.target.value });
          }}
          // adicionar contato com a tecla Enter
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              // validação dos campos
              if (contato.nome === "" || contato.telefone === "") {
                return alert("Preencha os campos");
              }
              // verificar se o contato existe
              let duplicado = listaDeContatos.find(
                (ct) =>
                  ct.nome === contato.nome && ct.telefone === contato.telefone
              );
              if (typeof duplicado !== "undefined") {
                inputTelefone.current.focus();
                alert("Nome ou número já existente!");
                return;
              } else {
                // adicionar contato
                setListaDeContatos([...listaDeContatos, contato]);
                // limpar contato
                setContato({ nome: "", telefone: "" });
                // colocar o focus
                inputNome.current.focus();
              }
            }
          }}
          minLength={9}
          maxLength={11}
          required
          placeholder="Telefone"
        />
      </div>
      <button
        onClick={() => {
          // validação dos campos
          if (contato.nome === "" || contato.telefone === "") {
            return alert("Preencha os campos");
          }
          // verificar se o contato existe
          let duplicado = listaDeContatos.find(
            (ct) => ct.nome === contato.nome && ct.telefone === contato.telefone
          );
          if (typeof duplicado !== "undefined") {
            inputTelefone.current.focus();
            alert("Nome ou número já existente!");
            return;
          } else {
            // adicionar contato
            setListaDeContatos([...listaDeContatos, contato]);
            // limpar contato
            setContato({ nome: "", telefone: "" });
            // colocar o focus
            inputNome.current.focus();
          }
        }}
      >
        Adicionar contato
      </button>
      <hr />
      {/* render da lista */}
      {listaDeContatos.map((cont) => {
        return (
          <ListaDeContatos
            chave={uuid()}
            nome={cont.nome}
            telefone={cont.telefone}
          />
        );
      })}
    </>
  );
}
