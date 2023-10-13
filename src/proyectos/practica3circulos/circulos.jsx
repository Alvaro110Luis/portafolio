import { useEffect } from "react";
import styles from "./circulos.module.scss";
function Circulos() {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(0,0,0)";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
      <article className={styles.contain}>
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
        <div
          className={styles.animacion}
          style={{
            animationDuration: `${
              Math.fround(Math.random() * (7 - 4 + 1)) + 4
            }s`,
          }}
        ></div>
      </article>
    </>
  );
}
export default Circulos;
