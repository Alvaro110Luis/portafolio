import styles from "./contacto.module.scss";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

function Contacto(props) {
  return (
    <footer className={styles.containContact} id="contacto">
      <article className={styles.containContactTitle}>
        <h1>{props.translate == "es" ? "Contactame" : "Let's Talk"}</h1>
        <BiLogoGmail />
      </article>
      <form
        action="https://formsubmit.co/luismoralvarez9020@gmail.com"
        method="POST"
        className={styles.containContactForm}
      >
        <div className={styles.divGmail}>
          <label htmlFor="email">Gmail:</label>
          <br />
          <input required type="email" name="email" placeholder="Gmail" />
        </div>
        <div className={styles.divName}>
          <label htmlFor="name">
            {props.translate == "es" ? "Nombre:" : "Name:"}
          </label>
          <br />
          <input
            required
            type="text"
            name="name"
            placeholder={props.translate == "es" ? "Nombre:" : "Name:"}
          />
        </div>
        <div className={styles.divMessage}>
          <label htmlFor="message">
            {props.translate == "es" ? "Mensaje:" : "Message:"}
          </label>
          <br />
          <textarea
            required
            maxLength="700"
            name="message"
            placeholder={props.translate == "es" ? "Mensaje:" : "Message:"}
            rows="5"
            cols="35"
          />
        </div>
        <div className={styles.divSendButton}>
          <input
            className={styles.sendButton}
            type="submit"
            value={props.translate == "es" ? "Enviar" : "Send"}
          />
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://alvaro110luis.github.io/portafolio/" /* https://alvaro110luis.github.io/portafolio/ */
        />
      </form>
    </footer>
  );
}
export default Contacto;
