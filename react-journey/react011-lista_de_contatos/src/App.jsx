import { useState, useRef } from "react";
import ListaDeContatos from "./components/ListaDeContatos";
import { v4 as uuid } from "uuid";

export default function App() {
  const [contato, setContato] = useState({ nome: "", telefone: "" });
  const [listaDeContatos, setListaDeContatos] = useState([]);

  const inputNome = useRef();
  const inputTelefone = useRef();

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
            return;
          }

          // adicionar contato
          setListaDeContatos([...listaDeContatos, contato]);

          // limpar contato
          setContato({ nome: "", telefone: "" });
          // colocar o focus
          inputNome.current.focus();
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
