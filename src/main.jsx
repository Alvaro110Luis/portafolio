import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./_Global.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./proyectos/practica1blog/indexblog";
import Calculadora from "./proyectos/practica2Calculadora_react/calculadora.jsx";
import Interfaz from "./proyectos/practica4interfaz/interfaz.jsx";
import Tarjeta3d from "./proyectos/practica5tarjetas3d/tarjeta3d.jsx";
import Netflix from "./proyectos/practica6netflix/netflix.jsx";
import LeftTogle from "./proyectos/practica8leftTogle/leftTogle.jsx";
import ControlApi from "./proyectos/practica9controlApi/controlApi.jsx";
import Card from "./proyectos/parctica10card/card.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/portafolio" element={<App />} />
        <Route path="/portafolio/blog" element={<Blog />} />
        <Route path="/portafolio/calculadora" element={<Calculadora />} />
        <Route path="/portafolio/interfaz" element={<Interfaz />} />
        <Route path="/portafolio/tarjeta3d" element={<Tarjeta3d />} />
        <Route path="/portafolio/netflix" element={<Netflix />} />
        <Route path="/portafolio/lefttogle" element={<LeftTogle />} />
        <Route path="/portafolio/controlapi" element={<ControlApi />} />
        <Route path="/portafolio/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
