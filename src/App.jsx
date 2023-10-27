import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { BiLogoReact, BiLogoJavascript, BiSolidCircle } from "react-icons/bi";
import { AiFillHtml5, AiFillSetting } from "react-icons/ai";
import { RxSwitch } from "react-icons/rx";
import { DiCss3, DiSass } from "react-icons/di";
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
  const [light, setlight] = useState(false);
  const [lenguage, setLenguage] = useState("es");
  return (
    <article className={light ? styles.containLight : styles.containDark}>
      <section
        className={`${styles.containCirculosBackground} ${
          light
            ? styles.containCirculosBackgroundLight
            : styles.containCirculosBackgroundDark
        }`}
      >
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
      <nav
        className={`${styles.containButton} ${
          light ? styles.containButtonLight : styles.containButtonDark
        }`}
      >
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
        <article>
          <div id="yo" className={styles.containContentMe}>
            <h1>
              <span>{lenguage == "es" ? "Sobre mí" : "About me"}</span>
            </h1>
            <p>
              <span>
                {lenguage == "es"
                  ? "Soy un desarrollador web frontend que empezo siendo autodidacta esta experiencia me ha permitido desarrollar habilidades y un interés por la creación de sitios web y aplicaciones web. Estoy comprometido a seguir aprendiendo y mejorando mis habilidades para ofrecer soluciones innovadoras y efectivas a los desafíos en el desarrollo web."
                  : "I'am a autodidact frontend web dev with a deep passion for programing. my motivation it's the idea of transform my ideas in solutions functionals. my journey in programation starts in the path autodidact this experiences allow me learn skills and an  interest for the creation of web sites and web app. I'am engaged to continue learning and boost my skills to offer innovate solutions and efectives to the challengs in the web dev"}
              </span>
            </p>
          </div>
          <div>
            <AiFillHtml5
              style={{ color: "rgb(255,100,0)", fontSize: "80px" }}
            />
            <DiCss3 style={{ color: "rgb(0,120,255)", fontSize: "80px" }} />
            <BiLogoJavascript
              style={{ color: "rgb(255,255,0)", fontSize: "80px" }}
            />
            <BiLogoReact
              style={{ color: "rgb(0,200,255)", fontSize: "80px" }}
            />
            <DiSass style={{ color: "rgb(255,0,255)", fontSize: "80px" }} />
          </div>
        </article>
        <Proyectos mode={light} />
        <Contacto mode={light} />
      </section>
    </article>
  );
}
export default App;
