import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from './layout/Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer>
        <ul className={styles.socialList}>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
        </ul>
      </footer>
    </>
  );
}
