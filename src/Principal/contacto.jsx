import styles from "./contacto.module.scss";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

function Contacto(props) {
  return (
    <section className={styles.containContact} id="contacto">
      <article className={styles.containContactTitle}>
        <h1>{props.translate == "es" ? "Contactame" : "Let's Talk"}</h1>
      </article>
      <nav>
        <article>
          <div></div>
          <Link to="https://www.linkedin.com/in/luis-morales-184076285/">
            <BsLinkedin />
          </Link>
        </article>
        <article>
          <div></div>
          <Link to="mailto:luismoralvarez9020@gmail.com">
            <BiLogoGmail />
          </Link>
        </article>
      </nav>
    </section>
  );
}
export default Contacto;
