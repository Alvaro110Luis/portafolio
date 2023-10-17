import { Link } from "react-router-dom";
import { useEffect } from "react";

import styles from "./proyectos.module.scss";

import imgBlog from "../img/Captura de pantalla 2023-10-03 174242.png";
import imgCalculadora from "../img/Captura de pantalla 2023-09-30 100343.png";
import imgCirculos from "../img/Captura de pantalla 2023-09-30 100400.png";
import imgInterfaz from "../img/Captura de pantalla 2023-09-30 100435.png";
import imgTarjeta from "../img/Captura de pantalla 2023-09-30 100613.png";
import imgNetflix from "../img/Captura de pantalla 2023-09-30 100641.png";
import imgLeftTogle from "../img/Captura de pantalla 2023-09-30 100657.png";
import imgControlApi from "../img/Captura de pantalla 2023-10-06 095359.png";
import imgCard from "../img/Captura de pantalla 2023-09-30 100827.png";

function Proyectos() {
  return (
    <article className={styles.contain} id="proyectos">
      <section>
        <h1>Proyectos</h1>
      </section>
      <nav className={styles.containLink}>
        <Link to="/proyectos/calculadora" className={styles.link}>
          <h3>Calculadora</h3>
          <img src={imgCalculadora} width="100%" height={250} />
        </Link>
        <Link to="/proyectos/blog" className={styles.link}>
          <h3>Blog</h3>
          <img src={imgBlog} width="100%" height={200} />
        </Link>
        <Link
          to="/proyectos/netflix"
          className={`${styles.link} ${styles.netflix}`}
        >
          <h3>Netflix</h3>
          <img src={imgNetflix} width="100%" height={490} />
        </Link>
        <Link
          to="/proyectos/interfaz"
          className={`${styles.link} ${styles.interfaz}`}
        >
          <h3>Interfaz</h3>
          <img src={imgInterfaz} width="100%" height={200} />
        </Link>
        <Link
          to="/proyectos/tarjeta"
          className={`${styles.link} ${styles.tarjeta}`}
        >
          <h3>Tarjeta</h3>
          <img src={imgTarjeta} width="100%" height={200} />
        </Link>
        <Link
          to="/proyectos/leftTogle"
          className={`${styles.link} ${styles.lefttogle}`}
        >
          <h3>Left Togle</h3>
          <img src={imgLeftTogle} width={250} height={590} />
        </Link>
        <Link to="/proyectos/card" className={styles.link}>
          <h3>Card</h3>
          <img src={imgCard} width="100%" height={250} />
        </Link>
        <Link
          to="/proyectos/controlapi"
          className={`${styles.link} ${styles.controlapi}`}
        >
          <h3>Control API</h3>
          <img src={imgControlApi} width="100%" height={250} />
        </Link>
        <Link to="/proyectos/circulos" className={styles.link}>
          <h3>Circulos</h3>
          <img src={imgCirculos} width="100%" height={200} />
        </Link>
      </nav>
    </article>
  );
}
export default Proyectos;
