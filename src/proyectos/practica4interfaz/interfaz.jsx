import {
  AiFillHome,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineCamera,
  AiTwotoneVideoCamera,
} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import styles from "./interfaz.module.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Interfaz() {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(230,230,230)";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
      <Link to="/portafolio/" className={styles.contenedorBack}>
        <BiArrowBack />
      </Link>
      <article className={styles.artBody}>
        <span>
          <AiFillHome />
        </span>
        <span>
          <AiOutlineMessage />
        </span>
        <span>
          <AiOutlineHeart />
        </span>
        <span>
          <AiTwotoneVideoCamera />
        </span>
        <span>
          <AiOutlineCamera />
        </span>
      </article>
    </>
  );
}
export default Interfaz;
