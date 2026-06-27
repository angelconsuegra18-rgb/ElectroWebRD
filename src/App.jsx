import "./App.css";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Calculadoras from "./pages/Calculadoras";
import Motores from "./pages/Motores";
import Protecciones from "./pages/Protecciones";
import CentroSolar from "./pages/CentroSolar";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/calculadoras"
          element={<Calculadoras />}
        />

        <Route
          path="/motores"
          element={<Motores />}
        />

        <Route
          path="/protecciones"
          element={<Protecciones />}
        />

        <Route
          path="/centro-solar"
          element={<CentroSolar />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

      </Routes>
    </>
  );
}

export default App;