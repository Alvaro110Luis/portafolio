import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./App.module.scss";
import { BiSolidCircle } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { RxSwitch } from "react-icons/rx";
import Proyectos from "./Principal/proyectos";
import Contacto from "./Principal/contacto";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
    document.body.style.color = "rgb(255, 255, 255)";
    document.body.className = styles.bodyProyectos;
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);
  const [lenguage, setLenguage] = useState("es");
  const [light, setlight] = useState(true);
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
      <nav className={styles.containButton}>
        <a href="#yo">
          <BiSolidCircle />
        </a>
        <a href="#proyectos">
          <BiSolidCircle />
        </a>
        <a href="#contacto">
          <BiSolidCircle />
        </a>
        <section
          className={`${
            light ? styles.containSettingsLight : styles.containSettingsDark
          } ${styles.containSettings}`}
        >
          <article
            className={`${
              light
                ? styles.containSettingsIconBorderLight
                : styles.containSettingsIconBorderDark
            } ${styles.containSettingsIcon}`}
          >
            <AiFillSetting className={styles.settingsIconOpen} />
            <br />
            <RxSwitch
              onClick={() => {
                if (light) setlight(false);
                else setlight(true);
              }}
              className={light ? styles.lightModeButton : styles.darkModeButton}
            />
            <br />
            <div
              onClick={() => {
                if (lenguage == "es") setLenguage("en");
                else setLenguage("es");
              }}
            >
              {lenguage == "es" ? "ES" : "EN"}
            </div>
          </article>
          <article className={styles.containSettingsDescription}>
            <p>
              {lenguage == "es"
                ? light
                  ? "Claro"
                  : "Oscuro"
                : light
                ? "Light"
                : "Dark"}
            </p>
            <p>{lenguage == "es" ? "Idioma" : "Language"}</p>
          </article>
        </section>
      </nav>
      <section className={styles.containContent}>
        <div id="yo">
          <h1>{lenguage == "es" ? "Sobre mí" : "About me"}</h1>
          <p>
            Soy un desarrollador web autodidacta con una profunda pasión por el
            mundo de la programación. Me motiva la idea de convertir mis ideas
            en soluciones funcionales y navegables. Mi viaje en la programación
            comenzó de forma autodidacta, y esta experiencia me ha permitido
            desarrollar habilidades sólidas y un profundo interés por la
            creación de sitios web y aplicaciones web. Estoy comprometido a
            seguir aprendiendo y mejorando mis habilidades constantemente para
            ofrecer soluciones innovadoras y efectivas a los desafíos en el
            desarrollo web.
          </p>
        </div>
        <Proyectos />
        <Contacto />
      </section>
    </article>
  );
}
export default App;
