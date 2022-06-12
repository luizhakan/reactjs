import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Projetos.module.css";
import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";

export default function Projetos() {
  const [projects, setProjects] = useState([]);

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
      })
      .catch((erro) => console.log(erro));
  }, []);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus projetos</h1>
        <LinkButton to="/novoprojeto" texto="Criar projeto" />
      </div>
      {message && <Message msg={message} type="sucess" />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((projeto) => (
            <ProjectCard
              id={projeto.id}
              name={projeto.name}
              budget={projeto.budget}
              category={projeto.category.name}
              key={projeto.id}
            />
          ))}
      </Container>
    </div>
  );
}
