import styles from "./contacto.module.scss";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

function Contacto() {
  return (
    <div className={styles.move}>
      <h1>Contactame</h1>
      <nav>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/luis-morales-184076285/">
              <BsLinkedin />
            </a>
            <div></div>
          </li>
          <li>
            <a href="mailto:luismoralvarez9020@gmail.com">
              <BiLogoGmail />
            </a>
            <div></div>
          </li>
          <li>
            <a href="https://wa.me/+59163250398">
              <BsWhatsapp />
            </a>
            <div></div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Contacto;
