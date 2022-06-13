import { BsFillTrashFill } from "react-icons/bs";
import styles from "../ProjectCard.module.css";

export default function ServiceCard({
  id,
  name,
  cost,
  description,
  handleRemove,
}) {
  function remove(e) {
    e.preventDefault();
    handleRemove(id, cost);
  }

  return (
    <div className={styles.projectCard}>
      <h4>{name}</h4>
      <p>
        <span>Custo total: </span> {cost}
      </p>
      <p>{description}</p>
      <div className={styles.projectCardAction}>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}
