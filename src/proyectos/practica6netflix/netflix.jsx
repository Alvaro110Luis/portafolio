import styles from "./netflix.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import img from "./img/Site-logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Netflix() {
  useEffect(() => {
    document.body.className = styles.divBody;
    return () => {
      document.body.className = "";
    };
  }, []);
  const [play, setPlay] = useState(false);
  return (
    <>
      <Link to="/portafolio/" className={styles.contenedorBack}>
        <BiArrowBack />
      </Link>
      <header className={styles.headerNetflix}>
        <svg width="120" height="30">
          <path
            d="
            M 0,30
            L 0,0 5,0 10,15 10,0 15,0 15,27.2 10,28 5,12 5,29 Z
            M 20,0
            L 20,26.7 33,25.8 33,20.8 24.7,21.4 24.7,10 30.5,10 30.5,15 24.7,15 24.7,5 33,5 33,0 Z
            M 35.9,0
            L 50,0 50,5 45.5,5 45.5,25.5 40.5,25.5 40.5,5 35.9,5 Z
            M 53,0 
            L 66.3,0 66.3,5 58,5 58,10 64.5,10 64.5,15 58,15 58,25.5 53,25.5 Z
            M 69,0
            L 74,0 74,21.3 82.5,21.7 82.5,26.5 69,25.7 Z
            M 85.9,0
            L 90.5,0 90.5,27.4 85.9,26.8 Z
            M 94,0
            L 99,0 102,8 105,0 110,0 105,14 110,30 105,29 102,19 99,28.5 94,27.8 99,14 Z
            "
            className={styles.logo}
          ></path>
        </svg>
        <article
          className={`${styles.blanco} ${styles.navegador}`}
          style={{ textAlign: "center" }}
        >
          <a>&nbsp; Home &nbsp;</a>
          <a>&nbsp; TV Shows &nbsp;</a>
          <a>&nbsp; Movies &nbsp;</a>
          <a>&nbsp; Latest &nbsp;</a>
          <a>&nbsp; My List &nbsp;</a>
        </article>
        <article className={styles.busqueda}>
          <div className={styles.icono}>
            <i>
              <AiOutlineSearch />
            </i>
          </div>
          <input type="text" placeholder="Search" />
        </article>
      </header>
      <section className={styles.contenido}>
        <article>
          <svg width="45" height="50.4">
            <path
              d="
                M 0,0
                L 0,50.4 10,50.4 10,0 Z
                M 31,0
                L 31,50.4 22,50.4 22,0Z"
            ></path>
            <path
              d="
                M 0,0
                L 10,0 31,50.4 22,50.4Z"
              className={styles.logo}
            ></path>
          </svg>
          <p className={styles.blanco}>S E R I E</p>
        </article>
        <img src={img} width="400px" height="200px" />
        <article>
          <p className={styles.blanco}>
            2022 | <b className={styles.alerta}>16+</b> | 6 Temporadas | Serie
          </p>
          <p className={styles.blanco}>
            Lorem ipsum dolor, sit amet consecletur adisicing elit. Hic esse
            animi
            <br />
            recunsandae non dolore, magnam quo qui sunt nisi, aut voluplatum
            odio,
            <br />
            mollilia sapiente provident soluta! Soluta amet libero nihil?
            <br />
          </p>
        </article>
        <article>
          <button className={`${styles.navegador} ${styles.botonrojo}`}>
            <b>PLAY</b>
          </button>
          <button className={`${styles.navegador} ${styles.boton}`}>
            <b>MY LIST</b>
          </button>
          <br />
          <br />

          <button
            className={`${styles.navegador} ${styles.boton} ${styles.reproducir}`}
            onClick={() => {
              setPlay(true);
            }}
          >
            <div className={styles.botonplay}>
              <svg width="70" height="60">
                <polyline
                  points="24,20 24,40 42,30 24,20 24,21"
                  style={{
                    fill: "none",
                    strokeWidth: "2",
                    stroke: "rgb(210,210,210)",
                  }}
                />
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  style={{
                    fill: "none",
                    strokeWidth: "4",
                    stroke: "rgb(210,210,210)",
                  }}
                />
              </svg>
            </div>
            <p>
              <b>WATCH TRAILER</b>
            </p>
          </button>
        </article>
      </section>
      <article
        className={styles.contenedorvideo}
        style={
          play == true ? { visibility: "visible" } : { visibility: "hidden" }
        }
      >
        <button
          className={`${styles.icono} ${styles.boton}`}
          onClick={() => {
            setPlay(false);
          }}
        >
          <svg width="50" height="50">
            <path
              d="M 5,5 L 45,45 Z M 5,45 L 45,5"
              style={{
                fill: "none",
                strokeWidth: "5",
                stroke: "rgb(230,230,230)",
              }}
            />
          </svg>
        </button>
        <iframe
          src={`https://www.youtube.com/embed/ZHZG6UArE3I${
            play == true ? "?autoplay=1" : "?pause=1"
          }`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  picture-in-picture; web-share"
          allowFullScreen
          className={styles.trailervideo}
        ></iframe>
      </article>
    </>
  );
}
export default Netflix;
