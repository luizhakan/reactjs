import { useState, useRef, useEffect } from "react";
import ListaDeContatos from "./components/ListaDeContatos";
import { v4 as uuid } from "uuid";
import "./App.css";
import styles from "./index.module.css";

// import icons
import {FaTrash, FaList,} from 'react-icons/fa';
import {IoMdPersonAdd} from 'react-icons/io';
import {SiDarkreader} from "react-icons/si"

export default function App() {
  const [contato, setContato] = useState({ id: "", nome: "", telefone: "" });
  const [listaDeContatos, setListaDeContatos] = useState([]);
  // mudar tema
  const [light, setLight] = useState(false);

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
    <div className={light ? styles.bg_lighte : styles.bg_darke}>
      <div className="container-fluid titulo">
        <div className="row">
          <div className="col text-center">
            <h1 className="text-center"><FaList className="me-3"/> Lista de contatos</h1>
            <SiDarkreader onClick={() => {setLight(!light)}} className={styles.icone} />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-auto col-md-auto col-lg-auto">
            <div className="row justify-content-center">
              <div className="col-sm-auto col-md-auto col-lg-auto">
                <div>
                  <label className="col-form-label-lg">Nome</label>
                  <br />
                  <input
                    className="form-control mb-3"
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
                <label className="col-form-label-lg">Telefone</label>
                <br />
                <div>
                  <input
                    className="form-control mb-3"
                    ref={inputTelefone}
                    type="text"
                    onChange={(e) => {
                      setContato({ ...contato, telefone: e.target.value });
                    }}
                    // adicionar contato com a tecla Enter
                    onKeyUp={(e) => {
                      if (e.code === "Enter" || e.code === "NumpadEnter") {
                        // validação dos campos
                        if (contato.nome === "" || contato.telefone === "") {
                          return alert("Preencha os campos");
                        }
                        // verificar se o contato existe
                        let duplicado = listaDeContatos.find(
                          (ct) =>
                            ct.nome === contato.nome &&
                            ct.telefone === contato.telefone
                        );
                        if (typeof duplicado !== "undefined") {
                          inputTelefone.current.focus();
                          alert("Nome ou número já existente!");
                          return;
                        } else {
                          // adicionar contato, e um id para o contato
                          setListaDeContatos([
                            ...listaDeContatos,
                            { ...contato, id: uuid() },
                          ]);
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
              <div className="row mt-3 justify-content-center">
                <div className="col">
                  <button
                    className="btn-dark"
                    onClick={() => {
                      // validação dos campos
                      if (contato.nome === "" || contato.telefone === "") {
                        return alert("Preencha os campos");
                      }
                      // verificar se o contato existe
                      let duplicado = listaDeContatos.find(
                        (ct) =>
                          ct.nome === contato.nome &&
                          ct.telefone === contato.telefone
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
                    <IoMdPersonAdd className="me-3" />
                    Adicionar contato
                  </button>
                  <button
                    className="btn-dark"
                    onClick={() => {
                      // limpar toda a lista
                      setListaDeContatos([]);
                    }}
                  >
                    <FaTrash className="me-3" />
                    Limpar lista
                  </button>
                </div>
              </div>
              <hr />
<div className="justify-content-center">

      {/* render da lista */}
      {listaDeContatos.map((cont) => {
        return (
          <ListaDeContatos
            key={cont.id}
            id={cont.id}
            nome={cont.nome}
            telefone={cont.telefone}
            remover={(id) => {
              let temporario = listaDeContatos.filter((ct) => ct.id !== id);
              setListaDeContatos(temporario);
              console.log(temporario);
            }}
          />
        );
      })}
</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
