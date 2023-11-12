import { useEffect } from "react";
import styles from "./tarjeta3d.module.scss";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
function Tarjeta3d() {
  useEffect(() => {
    document.body.style.backgroundImage =
      "linear-gradient(135deg, pink, blue, purple, white)";
    document.body.style.backgroundSize = "100% 100vh";
    document.body.style.color = "rgb(255, 255, 255)";
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.color = "";
    };
  }, []);
  return (
    <>
      <Link to="/portafolio" className={styles.contenedorBack}>
        <BiArrowBack />
      </Link>
      <section className={styles.envoltura}>
        <article className={styles.animation}>
          <div></div>
          <div className={styles.back}></div>
          <div>
            <h1>TITULO DE PRUEBA</h1>
            <p>
              relleno de prueba relleno de prueba relleno de prueba relleno de
              prueba relleno de prueba
            </p>
          </div>
        </article>
        <article className={styles.animation}>
          <div></div>
          <div className={styles.back}></div>
          <div>
            <h1>TITULO DE PRUEBA</h1>
            <p>
              relleno de prueba relleno de prueba relleno de prueba relleno de
              prueba relleno de prueba
            </p>
          </div>
        </article>
        <article className={styles.animation}>
          <div></div>
          <div className={styles.back}></div>
          <div>
            <h1>TITULO DE PRUEBA</h1>
            <p>
              relleno de prueba relleno de prueba relleno de prueba relleno de
              prueba relleno de prueba
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
export default Tarjeta3d;
