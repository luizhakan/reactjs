import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Projetos.module.css";
import Message from "../layout/Message";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";

export default function Projetos() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        setProjects(data);
        setRemoveLoading(true);
      })
      .catch((erro) => console.log(erro));
  }, []);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resposta) => resposta.json)
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage("Projeto removido com sucesso");
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus projetos</h1>
        <LinkButton to="/novoprojeto" texto="Criar projeto" />
      </div>
      {message && <Message msg={message} type="sucess" />}
      {projectMessage && <Message type="sucess" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((projeto) => (
            <ProjectCard
              id={projeto.id}
              name={projeto.name}
              budget={projeto.budget}
              category={projeto.category.name}
              key={projeto.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados</p>
        )}
      </Container>
    </div>
  );
}
