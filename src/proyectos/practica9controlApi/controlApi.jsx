import { useEffect, useState } from "react";
import styles from "./controlApi.module.scss";
function ControlApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(20,20,20)";
    setLoading(true);
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((res) => setData(res))
      .finally(() => {
        setLoading(false);
      });
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  const [busca, setBusca] = useState("George");
  const Usuarios = () => {
    for (let valueName of data.data) {
      if (busca == valueName.first_name) {
        return (
          <section className={styles.contenedorUser}>
            <img alt="foto" src={valueName.avatar} />
            <div>
              <h1>ID: {valueName.id}</h1>
              <p>
                Nombre: {valueName.first_name}
                <br />
                Apellido: {valueName.last_name}
                <br />
                Email: {valueName.email}
              </p>
            </div>
          </section>
        );
      }
    }
    if (busca.length >= 0) {
      return <p className={styles.notFound}>No encontrado</p>;
    }
  };
  return (
    <article className={styles.contenedor}>
      {loading ? (
        <p className={styles.loading}>Cargando....</p>
      ) : (
        <>
          <input
            type="text"
            onChange={(e) => {
              if (e.target.value != "") {
                setBusca(
                  e.target.value.slice(0, 1).toUpperCase() +
                    e.target.value.slice(1)
                );
              } else {
                setBusca(e.target.value);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") setBusca(e.target.value);
            }}
            placeholder="busca"
            list="opciones"
            className={styles.buscador}
          />
          <datalist id="opciones">
            {data.data.map((item, index) => {
              return <option key={index}>{item.first_name}</option>;
            })}
          </datalist>
          <Usuarios />
        </>
      )}
    </article>
  );
}
export default ControlApi;
