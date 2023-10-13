import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./App.module.scss";
import { BiSolidCircle } from "react-icons/bi";

function App() {
  useEffect(() => {
    document.body.style.margin = "50px 30px";
    document.body.style.backgroundColor = "rgb(0,0,0)";
    document.body.style.color = "rgb(255, 255, 255)";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      document.body.style.margin = "";
    };
  }, []);
  const location = useLocation();
  return (
    <article>
      <section className={styles.containCirculosBackground}>
        <div
          className={styles.animacion}
          style={{
            animationDuration: `${
              Math.fround(Math.random() * (7 - 4 + 1)) + 4
            }s`,
          }}
        ></div>
        <div
          className={styles.animacion}
          style={{
            animationDuration: `${
              Math.fround(Math.random() * (7 - 4 + 1)) + 4
            }s`,
          }}
        ></div>
        <div
          className={styles.animacion}
          style={{
            animationDuration: `${
              Math.fround(Math.random() * (7 - 4 + 1)) + 4
            }s`,
          }}
        ></div>
        <div
          className={styles.animacion}
          style={{
            animationDuration: `${
              Math.fround(Math.random() * (7 - 4 + 1)) + 4
            }s`,
          }}
        ></div>
        <div
          className={styles.animacion}
          style={{
            animationDuration: `${
              Math.fround(Math.random() * (7 - 4 + 1)) + 4
            }s`,
          }}
        ></div>
        <div
          className={styles.animacion}
          style={{
            animationDuration: `${
              Math.fround(Math.random() * (7 - 4 + 1)) + 4
            }s`,
          }}
        ></div>
      </section>

      <section className={styles.containButton}>
        <Link
          to="/"
          className={`${styles.buttonShow} ${
            location.pathname == "/" ? styles.active : ""
          }`}
        >
          {location.pathname == "/" ? <BiSolidCircle /> : "Yo"}
        </Link>
        <Link
          to="/proyectos"
          className={`${styles.buttonShow} ${
            location.pathname == "/proyectos" ? styles.active : ""
          }`}
        >
          {location.pathname == "/proyectos" ? <BiSolidCircle /> : "Proyectos"}
        </Link>
        <Link
          to="/contacto"
          className={`${styles.buttonShow} ${
            location.pathname == "/contacto" ? styles.active : ""
          }`}
        >
          {location.pathname == "/contacto" ? <BiSolidCircle /> : "Contacto"}
        </Link>
      </section>
      <section>
        {location.pathname == "/" ? (
          <div className={styles.containYo}>
            <h1>Sobre mí</h1>
            <p>
              Soy un desarrollador web autodidacta con una profunda pasión por
              el mundo de la programación. Me motiva la idea de convertir mis
              ideas en soluciones funcionales y navegables. Mi viaje en la
              programación comenzó de forma autodidacta, y esta experiencia me
              ha permitido desarrollar habilidades sólidas y un profundo interés
              por la creación de sitios web y aplicaciones web. Estoy
              comprometido a seguir aprendiendo y mejorando mis habilidades
              constantemente para ofrecer soluciones innovadoras y efectivas a
              los desafíos en el desarrollo web.
            </p>
          </div>
        ) : (
          <Outlet />
        )}
      </section>
    </article>
  );
}
export default App;
