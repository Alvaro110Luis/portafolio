import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { BiLogoReact, BiLogoJavascript } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSass } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import Proyectos from "./Principal/proyectos";
import Contacto from "./Principal/contacto";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#480048";
    document.body.className = styles.bodyProyectos;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  const [light, setlight] = useState(true);
  const [lenguage, setLenguage] = useState("es");
  return (
    <article className={styles.contain}>
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
        <div
          className={styles.animacion}
          style={{
            animationDuration: `${
              Math.fround(Math.random() * (7 - 4 + 1)) + 4
            }s`,
          }}
        ></div>
      </section>
      <header className={styles.containHeader}>
        <section className={styles.containHeaderLogo}>
          <Link to="https://www.linkedin.com/in/luis-morales-184076285/">
            <BsLinkedin />
          </Link>
          <p>{lenguage == "es" ? "Hola soy Luis!" : "Hi i'am Luis"}</p>
        </section>
        <nav className={styles.containHeaderButton}>
          <a href="#yo">{lenguage == "es" ? "Sobre mí" : "About me"}</a>
          <a href="#proyectos">{lenguage == "es" ? "Proyectos" : "Projects"}</a>
          <a href="#contacto">{lenguage == "es" ? "Contacto" : "Contact"}</a>
          <button
            onClick={() => {
              if (lenguage == "es") setLenguage("en");
              else setLenguage("es");
            }}
          >
            {lenguage == "es" ? "ES" : "EN"}
          </button>
        </nav>
      </header>
      <section className={styles.containContent}>
        <article id="yo" className={styles.containContentStart}>
          <div className={styles.containContentStartMe}>
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
          <div className={styles.containContentStartTecIcons}>
            <AiFillHtml5 className={styles.rotarAntihorario} />
            <DiCss3
              style={{ gridColumn: "3/4" }}
              className={styles.rotarAntihorario}
            />
            <BiLogoReact
              style={{ gridColumn: "2/3" }}
              className={styles.rotarHorario}
            />
            <BiLogoJavascript
              style={{ gridRow: "3/4" }}
              className={styles.rotarAntihorario}
            />
            <DiSass
              style={{
                gridRow: "3/4",
                gridColumn: "3/4",
              }}
              className={styles.rotarAntihorario}
            />
          </div>
        </article>
        <Proyectos mode={light} translate={lenguage} />
      </section>
      <Contacto mode={light} translate={lenguage} />
    </article>
  );
}
export default App;
