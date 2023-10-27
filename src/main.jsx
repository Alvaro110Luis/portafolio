import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./_Global.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./proyectos/practica1blog/indexblog";
import Calculadora from "./proyectos/practica2Calculadora_react/calculadora.jsx";
import Circulos from "./proyectos/practica3circulos/circulos.jsx";
import Interfaz from "./proyectos/practica4interfaz/interfaz.jsx";
import Tarjeta3d from "./proyectos/practica5tarjetas3d/tarjeta3d.jsx";
import Netflix from "./proyectos/practica6netflix/netflix.jsx";
import LeftTogle from "./proyectos/practica8leftTogle/leftTogle.jsx";
import ControlApi from "./proyectos/practica9controlApi/controlApi.jsx";
import Card from "./proyectos/parctica10card/card.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/proyectos/blog",
    element: <Blog />,
  },
  {
    path: "/proyectos/calculadora",
    element: <Calculadora />,
  },
  {
    path: "/proyectos/circulos",
    element: <Circulos />,
  },
  {
    path: "/proyectos/interfaz",
    element: <Interfaz />,
  },
  {
    path: "/proyectos/tarjeta",
    element: <Tarjeta3d />,
  },
  {
    path: "/proyectos/netflix",
    element: <Netflix />,
  },
  {
    path: "/proyectos/leftTogle",
    element: <LeftTogle />,
  },
  {
    path: "/proyectos/controlapi",
    element: <ControlApi />,
  },
  {
    path: "/proyectos/card",
    element: <Card />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
