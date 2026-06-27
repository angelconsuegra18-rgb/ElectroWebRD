import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

/* ===== ESTILOS ===== */

import "./styles/global.css";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/calculadoras.css";
import "./styles/motores.css";
import "./styles/protecciones.css";
import "./styles/solar.css";
import "./styles/contacto.css";
import "./styles/layout.css";
import "./styles/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);