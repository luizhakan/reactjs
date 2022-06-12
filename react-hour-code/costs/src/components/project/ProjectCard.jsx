import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

export default function ProjectCard({
  id,
  name,
  budget,
  category,
  handleRemove,
}) {
  return (
    <div className={styles.projectCard}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento: </span> R$ {budget}
      </p>
      <p className={styles.categoryText}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>
      <div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">
              <BsPencil /> Editar
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/">
              <BsFillTrashFill /> Excluir
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
