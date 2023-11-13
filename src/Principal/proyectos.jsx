import { Link } from "react-router-dom";

import styles from "./proyectos.module.scss";

import imgBlog from "../assets/img/Captura de pantalla 2023-10-03 174242.png";
import imgCalculadora from "../assets/img/Captura de pantalla 2023-09-30 100343.png";
import imgInterfaz from "../assets/img/Captura de pantalla 2023-09-30 100435.png";
import imgTarjeta from "../assets/img/Captura de pantalla 2023-09-30 100613.png";
import imgNetflix from "../assets/img/Captura de pantalla 2023-09-30 100641.png";
import imgLeftTogle from "../assets/img/Captura de pantalla 2023-09-30 100657.png";
import imgControlApi from "../assets/img/Captura de pantalla 2023-10-06 095359.png";
import imgCard from "../assets/img/Captura de pantalla 2023-09-30 100827.png";

function Proyectos(props) {
  return (
    <article className={styles.contain} id="proyectos">
      <section>
        <h1>{props.translate == "es" ? "Proyectos" : "Projects"}</h1>
      </section>
      <nav className={styles.containLink}>
        <Link
          to="/portafolio/calculadora"
          className={`${props.mode ? styles.linkLight : styles.linkDark} ${
            styles.link
          }`}
        >
          <h3>{props.translate == "es" ? "Calculadora" : "Calculator"}</h3>
          <img src={imgCalculadora} />
        </Link>
        <Link
          to="/portafolio/blog"
          className={`${props.mode ? styles.linkLight : styles.linkDark} ${
            styles.link
          }`}
        >
          <h3>Blog</h3>
          <img src={imgBlog} />
        </Link>
        <Link
          to="/portafolio/netflix"
          className={`${props.mode ? styles.linkLight : styles.linkDark} ${
            styles.link
          }`}
          style={{ gridRow: "1/3", gridColumn: "2/4" }}
        >
          <h3>Netflix</h3>
          <img src={imgNetflix} />
        </Link>
        <Link
          to="/portafolio/interfaz"
          className={`${props.mode ? styles.linkLight : styles.linkDark} ${
            styles.link
          }`}
          style={{ gridColumn: "1/3" }}
        >
          <h3>{props.translate == "es" ? "Interfaz" : "Interface"}</h3>
          <img src={imgInterfaz} />
        </Link>
        <Link
          to="/portafolio/card"
          className={`${props.mode ? styles.linkLight : styles.linkDark} ${
            styles.link
          }`}
        >
          <h3>{props.translate == "es" ? "Tarjeta" : "Card"}</h3>
          <img src={imgCard} />
        </Link>
        <Link
          to="/portafolio/leftTogle"
          className={`${props.mode ? styles.linkLight : styles.linkDark} ${
            styles.link
          }`}
          style={{ gridRow: "4/6" }}
        >
          <h3>{props.translate == "es" ? "Barra Lateral" : "Sidebar"}</h3>
          <img src={imgLeftTogle} />
        </Link>
        <Link
          to="/portafolio/tarjeta3d"
          className={`${props.mode ? styles.linkLight : styles.linkDark} ${
            styles.link
          }`}
          style={{ gridColumn: "2/4" }}
        >
          <h3>{props.translate == "es" ? "Tarjeta 3D" : "3D Card"}</h3>
          <img src={imgTarjeta} />
        </Link>
        <Link
          to="/portafolio/controlapi"
          className={`${props.mode ? styles.linkLight : styles.linkDark} ${
            styles.link
          }`}
          style={{ gridColumn: "2/4" }}
        >
          <h3>{props.translate == "es" ? "Control API" : "API Control"}</h3>
          <img src={imgControlApi} />
        </Link>
      </nav>
    </article>
  );
}
export default Proyectos;
