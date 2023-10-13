import { useState } from "react";
import styles from "./leftTogle.module.scss";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineCamera,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { useEffect } from "react";
function LeftTogle() {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(50,50,80)";
    document.body.style.color = "rgb(0,0,0)";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  },[]);
  const [amplified, setAmplified] = useState(false);
  const Iconos = (props) => {
    const [select, setSelect] = useState("");
    return (
      <>
        <p className={styles.texto}>{props.content}</p>
        <svg
          width="41px"
          height="41px"
          className={`${styles.contenedorIcono} ${
            select == `${props.content}` ? styles[`${props.content}`] : ""
          }`}
          onClick={() => {
            if (select == `${props.content}`) {
              setSelect("");
            } else {
              setSelect(`${props.content}`);
            }
          }}
        >
          <path
            d={props.d}
            className={`${styles.icono} ${
              select == `${props.content}` ? styles.iconoselect : ""
            }`}
          ></path>
        </svg>
      </>
    );
  };
  return (
    <article
      className={styles.contenedorBarra}
      style={amplified ? { width: "200px" } : {}}
    >
      <section className={styles.contenedorMenu}>
        <div
          className={styles.abrirMenu}
          onClick={() => {
            setAmplified(!amplified);
          }}
        >
          <span
            className={`${styles.linea1} ${
              amplified ? styles.lineasAnimationCancel1 : ""
            }`}
          ></span>
          <span
            className={`${styles.linea2} ${
              amplified ? styles.lineasAnimationCancel2 : ""
            }`}
          ></span>
          <span
            className={`${styles.linea3} ${
              amplified ? styles.lineasAnimationCancel3 : ""
            }`}
          ></span>
        </div>
      </section>
      <section className={styles.contenedorOpciones}>
        <div>
          <Iconos
            d="M .8,20 L 20,1.8 40.2,20M 37,18L 37,39.5 27,39.5 27,25 13,25 13,39.5 4,39.5 4,17M 35,15L 35,3 27,3 27,8"
            content="Home"
          />
          <Iconos
            d="M 13,18 A 10,10 0 1,1 14,19ZM 1,39.5C 10,23 30,23 40,39.5Z"
            content="About"
          />
          <Iconos
            d="M 5,30 A 18,18 0 1,1 10,35L 1,40L 5,29"
            content="Messages"
          />
          <Iconos
            d="M 1,10L 1,35 40,35 40,10 29,10 29,5 12,5 12,10 0,10M 14,20 A 6.5,6.5 0 1,1 14,21Z"
            content="Photos"
          />
          <Iconos
            d="M 14 3 L 26 3 L 26 8 L 28 9 L 32 6 L 38 14 L 33 17 L 33 23 L 38 26 L 32 34 L 28 31 L 26 32 L 26 37 L 14 37 L 14 32 L 12 31 L 8 34 L 2 26 L 7 23 L 7 17 L 2 14 L 8 6 L 12 9 L 14 8 Z M 25 20 A 1 1 0 0 0 15 20 A 1 1 0 0 0 25 20"
            content="Settings"
          />
        </div>
      </section>
    </article>
  );
}
export default LeftTogle;
