import styles from "./indexblog.module.scss";
import img1 from "./img/Captura de pantalla 2023-05-15 171554.png";
import img2 from "./img/Captura de pantalla 2023-05-15 171528.png";
import img3 from "./img/Captura de pantalla 2023-05-15 171554.png";
import { useEffect } from "react";
function Blog() {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(220, 220, 220)";
    return () => {
      document.body.style.backgroundColor = "";
    };
  },[]);
  return (
    <>
      <header id="titulo" className={styles.headerBlog}>
        <h1>Blog de referencia</h1>
      </header>
      <section className={styles.contenedorArticle}>
        <article>
          <h2>Post de ejemplo Nº1</h2>
          <p>descripcion del post</p>
          <img src={img1} />
          <p>
            Mas descripcion del post que se deberia mostar de forma larga (esto
            es solo texto de relleno)
          </p>
        </article>
        <article>
          <h2>Post de ejemplo Nº2</h2>
          <p>descripcion del post</p>
          <img src={img2} />
          <p>
            Mas descripcion del post que se deberia mostar de forma larga (esto
            es solo texto de relleno)
          </p>
        </article>
        <article>
          <h2>Post de ejemplo Nº3</h2>
          <p>descripcion del post</p>
          <img src={img3} />
          <p>
            Mas descripcion del post que se deberia mostar de forma larga (esto
            es solo texto de relleno)
          </p>
        </article>
      </section>
      <footer className={styles.footerBlog}>
        <section>
          <a href="#titulo">Ir al comienzo</a>
          <a href="mailto:luismoralvarez9020@gmail.com">Servicio al cliente </a>
        </section>
        <p>Derechos Reservados 2023</p>
      </footer>
    </>
  );
}
export default Blog;
