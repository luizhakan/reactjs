import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

export default function ProjectForm({btnText}) {
  return (
    <div>
      <form className={styles.form}>
        <Input
          type="text"
          text="Nome do projeto"
          name="Nome"
          placeholder="Insira o nome do projeto"
        />
        <Input
          type="number"
          text="Orçamento do projeto"
          placeholder="Insira o orçamento total"
          name="budget"
        />
        <Select name="category_id" text="Selecione a categoria" />
        <SubmitButton text={btnText} />
      </form>
    </div>
  );
}
