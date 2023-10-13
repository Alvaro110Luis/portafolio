import {
  AiFillHome,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineCamera,
  AiTwotoneVideoCamera,
} from "react-icons/ai";
import styles from "./interfaz.module.scss";
import { useEffect } from "react";
function Interfaz() {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(230,230,230)";
    return () => {
      document.body.style.backgroundColor = "";
    };
  },[]);
  return (
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
  );
}
export default Interfaz;
