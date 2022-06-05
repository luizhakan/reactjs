import ProjectForm from "../project/ProjectForm";
import styles from "./NovoProjeto.module.css"

export default function NovoProjeto() {
  return (
    <div className={styles.novoProjetoContainer}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar projeto" />
    </div>
  );
}
