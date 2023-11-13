import zapBlack from "./img/descarga (1).png";
import zapRed from "./img/descarga (2).png";
import zapBlue from "./img/descarga.png";

import styles from "./card.module.scss";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
function Card() {
  useEffect(() => {
    document.body.style.backgroundImage =
      "linear-gradient(135deg, pink, blue, purple, white)";
    document.body.style.backgroundSize = "100% 100vh";
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
    };
  }, []);
  const [put, setPut] = useState([2, false]);
  return (
    <>
      <Link to="/portafolio/" className={styles.contenedorBack}>
        <BiArrowBack />
      </Link>
      <section className={styles.contenedor}>
        <article className={styles.contenedorImagenes}>
          <div
            onMouseOver={() => {
              setPut([1, true]);
            }}
            onMouseOut={() => {
              setPut([1, false]);
            }}
          >
            <img src={zapBlue} className={styles.imagen} />
          </div>
          <div
            onMouseOver={() => {
              setPut([2, true]);
            }}
            onMouseOut={() => {
              setPut([2, false]);
            }}
          >
            <img src={zapBlack} className={styles.imagen} />
          </div>
          <div
            onMouseOver={() => {
              setPut([3, true]);
            }}
            onMouseOut={() => {
              setPut([3, false]);
            }}
          >
            <img src={zapRed} className={styles.imagen} />
          </div>
        </article>
        <article className={styles.contenedorInfo}>
          <h1 className={styles.texto}>Nike Air Zoom</h1>
          <img
            src={put[0] == 1 ? zapBlue : put[0] == 2 ? zapBlack : zapRed}
            className={`${styles.imagenPrincipal} ${
              put[1] ? styles.rotar : ""
            }`}
            onMouseOver={() => {
              setPut([put[0], !put[1]]);
            }}
            onMouseOut={() => {
              setPut([put[0], !put[1]]);
            }}
          />
          <div className={styles.texto}>
            Size
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
        </article>
        <div className={`${styles.textoBoton} ${styles.texto}`}>
          Add To Cart
        </div>
      </section>
    </>
  );
}
export default Card;
