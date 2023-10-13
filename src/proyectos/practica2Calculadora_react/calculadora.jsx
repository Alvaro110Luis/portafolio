import styles from "./calculadora.module.scss";
import { useEffect, useState } from "react";
function Calculadora() {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(255, 170, 170)";
    return () => {
      document.body.style.backgroundColor = "";
    };
  },[]);
  const [operacion, setOperacion] = useState("");
  const operar = (datos) => {
    if (datos[1] == "+") return parseFloat(datos[0]) + parseFloat(datos[2]);
    else if (datos[1] == "-")
      return parseFloat(datos[0]) - parseFloat(datos[2]);
    else if (datos[1] == "*")
      return parseFloat(datos[0]) * parseFloat(datos[2]);
    else if (datos[1] == "/")
      return parseFloat(datos[0]) / parseFloat(datos[2]);
    else if (datos[1] == "%")
      return parseFloat(datos[0]) * (parseFloat(datos[2]) * 0.01);
  };
  const Boton = ({ valor }) => {
    return (
      <div
        className={styles.numero}
        onClick={() => {
          setOperacion(operacion + valor);
        }}
      >
        {valor}
      </div>
    );
  };
  const Simbolo = ({ valor }) => {
    return (
      <div
        className={styles.simbolo}
        onClick={() => {
          if (
            (operacion.includes("*") ||
              operacion.includes("+") ||
              operacion.includes("-") ||
              operacion.includes("/") ||
              operacion.includes("%")) &&
            valor != "."
          )
            setOperacion(JSON.stringify(operar(operacion.split(" "))) + valor);
          else setOperacion(operacion + valor);
        }}
      >
        {valor}
      </div>
    );
  };
  return (
    <>
      <section className={styles.contenedor}>
        <article>
          <p className={styles.contenedorResultado}>
            {operacion == "null" ? setOperacion("") : operacion}
          </p>
        </article>
        <article className={styles.contenedorNumeroses}>
          <div
            className={styles.clear}
            onClick={() => {
              setOperacion("");
            }}
          >
            C
          </div>
          <Simbolo valor=" * " />
          <Simbolo valor=" / " />
          <div
            className={styles.simbolo}
            onClick={() => {
              if (operacion.endsWith(" ")) setOperacion(operacion.slice(0, -3));
              else setOperacion(operacion.slice(0, -1));
            }}
          >
            {"<"}
          </div>
          <Boton clase="numero" valor="7" />
          <Boton clase="numero" valor="8" />
          <Boton clase="numero" valor="9" />
          <Simbolo valor=" - " />
          <Boton clase="numero" valor="4" />
          <Boton clase="numero" valor="5" />
          <Boton clase="numero" valor="6" />
          <Simbolo valor=" + " />
          <Boton clase="numero" valor="1" />
          <Boton clase="numero" valor="2" />
          <Boton clase="numero" valor="3" />
          <Simbolo valor="." />
          <Boton clase="numero" valor="0" />
          <Simbolo valor=" % " />
          <div
            className={styles.igual}
            onClick={() => {
              if (
                operacion.includes("*") ||
                operacion.includes("+") ||
                operacion.includes("-") ||
                operacion.includes("/") ||
                operacion.includes("%")
              )
                setOperacion(JSON.stringify(operar(operacion.split(" "))));
            }}
          >
            =
          </div>
        </article>
      </section>
    </>
  );
}
export default Calculadora;
