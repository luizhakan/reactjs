import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/companhia">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">Contato</Link>
          </li>
          {/* <li className={styles.item}>
            <Link to="/novoprojeto">Novo Projeto</Link>
          </li> */}
        </ul>
      </Container>
    </nav>
  );
}
