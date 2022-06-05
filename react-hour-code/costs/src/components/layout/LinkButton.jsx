import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

export default function LinkButton({ to, texto }) {
  return (
    <>
      <Link className={styles.link} to={to}>{texto}</Link>
    </>
  );
}
