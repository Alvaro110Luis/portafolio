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
      <nav className={styles.containNav}>
        <Link
          to="/portafolio/calculadora"
          className={`${styles.containNavLink} ${styles.containNavLinkEven}`}
        >
          <div className={styles.containNavLinkContent}>
            <h3>{props.translate == "es" ? "Calculadora" : "Calculator"}</h3>
            <img src={imgCalculadora} />
          </div>
        </Link>
        <Link
          to="/portafolio/blog"
          className={`${styles.containNavLink} ${styles.containNavLinkEven}`}
        >
          <div className={styles.containNavLinkContent}>
            <h3>Blog</h3>
            <img src={imgBlog} />
          </div>
        </Link>
        <Link
          to="/portafolio/netflix"
          className={`${styles.containNavLink} ${styles.containNavLinkOdd}`}
          style={{ gridRow: "1/3", gridColumn: "2/4" }}
        >
          <div className={styles.containNavLinkContent}>
            <h3>Netflix</h3>
            <img src={imgNetflix} />
          </div>
        </Link>
        <Link
          to="/portafolio/interfaz"
          className={`${styles.containNavLink} ${styles.containNavLinkEven}`}
          style={{ gridColumn: "1/3" }}
        >
          <div className={styles.containNavLinkContent}>
            <h3>{props.translate == "es" ? "Interfaz" : "Interface"}</h3>
            <img src={imgInterfaz} />
          </div>
        </Link>
        <Link
          to="/portafolio/card"
          className={`${styles.containNavLink} ${styles.containNavLinkOdd}`}
        >
          <div className={styles.containNavLinkContent}>
            <h3>{props.translate == "es" ? "Tarjeta" : "Card"}</h3>
            <img src={imgCard} />
          </div>
        </Link>
        <Link
          to="/portafolio/leftTogle"
          className={`${styles.containNavLink} ${styles.containNavLinkEven}`}
          style={{ gridRow: "4/6" }}
        >
          <div className={styles.containNavLinkContent}>
            <h3>{props.translate == "es" ? "Barra Lateral" : "Sidebar"}</h3>
            <img src={imgLeftTogle} />
          </div>
        </Link>
        <Link
          to="/portafolio/tarjeta3d"
          className={`${styles.containNavLink} ${styles.containNavLinkOdd}`}
          style={{ gridColumn: "2/4" }}
        >
          <div className={styles.containNavLinkContent}>
            <h3>{props.translate == "es" ? "Tarjeta 3D" : "3D Card"}</h3>
            <img src={imgTarjeta} />
          </div>
        </Link>
        <Link
          to="/portafolio/controlapi"
          className={`${styles.containNavLink} ${styles.containNavLinkOdd}`}
          style={{ gridColumn: "2/4" }}
        >
          <div className={styles.containNavLinkContent}>
            <h3>{props.translate == "es" ? "Control API" : "API Control"}</h3>
            <img src={imgControlApi} />
          </div>
        </Link>
      </nav>
    </article>
  );
}
export default Proyectos;
