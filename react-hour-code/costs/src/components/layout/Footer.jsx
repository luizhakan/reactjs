import { FaFacebook, FaInstagram, FaLinkedin, FaLink } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a
          className={styles.link}
          href="https://luizhakan.github.io/luizhakan"
          target="_blank"
        >
          <i className="site">
            <FaLink className={styles.pagina} />
          </i>
        </a>
        <a
          className={styles.link}
          href="https://instagram.com/luizhakan.py/"
          target="_blank"
        >
          <i className={styles.instagram}>
            <FaInstagram className={styles.instagram} />
          </i>
        </a>
        <a
          className={styles.link}
          href="https://linkedin.com/in/luizhakan/"
          target="_blank"
        >
          <i className={styles.linkedin}>
            <FaLinkedin className={styles.linkedin} />
          </i>
        </a>
        <p>Luiz Hakan</p>
        <p className={styles.copyright}>
          <span>Cost Projetcs</span> &copy; 2022
        </p>
      </footer>
    </>
  );
}
