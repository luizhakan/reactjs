import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import styles from "./NovoProjeto.module.css"

export default function NovoProjeto() {

  const navigate = useNavigate();

  function createPost(project){
    // inicializar cost e serviços
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects",{
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(project)
    }).then(
      resposta => resposta.json()
    ).then(data => {
      console.log(data)
      // redirecionar
      navigate('/projetos', {message: "Projeto criado com sucesso!"})
    }).catch(erro => console.log(erro))
  }

  return (
    <div className={styles.novoProjetoContainer}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}
