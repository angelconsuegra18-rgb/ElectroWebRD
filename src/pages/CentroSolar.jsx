import { useState } from "react";
import "./CentroSolar.css";

import SolarCalculator from "../components/solar/SolarCalculator";
import BatteryCalculator from "../components/solar/BatteryCalculator";
import InverterCalculator from "../components/solar/InverterCalculator";
import ProtectionCalculator from "../components/solar/ProtectionCalculator";
import ConductorCalculator from "../components/solar/ConductorCalculator";
import ReportGenerator from "../components/solar/ReportGenerator";

function CentroSolar() {

  const [moduloActivo, setModuloActivo] = useState("diseno");

  return (

    <div className="solar-page">

      <div className="solar-header">

        <h1>☀ Centro Solar</h1>

        <p>
          Plataforma profesional para el diseño de sistemas fotovoltaicos.
        </p>

      </div>

      <div className="solar-grid">

        <div
          className={`solar-card ${
            moduloActivo === "diseno" ? "active" : ""
          }`}
          onClick={() => setModuloActivo("diseno")}
        >

          <div className="solar-icon">☀</div>

          <h2>Diseño Fotovoltaico</h2>

          <p>
            Dimensiona un sistema solar completo.
          </p>

          <span className="badge disponible">
            Disponible
          </span>

        </div>

        <div
          className={`solar-card ${
            moduloActivo === "baterias" ? "active" : ""
          }`}
          onClick={() => setModuloActivo("baterias")}
        >

          <div className="solar-icon">🔋</div>

          <h2>Banco de Baterías</h2>

          <p>
            Cálculo profesional del banco de baterías.
          </p>

          <span className="badge disponible">
            Disponible
          </span>

        </div>

        <div
          className={`solar-card ${
            moduloActivo === "inversor" ? "active" : ""
          }`}
          onClick={() => setModuloActivo("inversor")}
        >

          <div className="solar-icon">⚡</div>

          <h2>Selección de Inversor</h2>

          <p>
            Dimensionamiento automático del inversor.
          </p>

          <span className="badge disponible">
            Disponible
          </span>

        </div>

        <div
          className={`solar-card ${
            moduloActivo === "protecciones" ? "active" : ""
          }`}
          onClick={() => setModuloActivo("protecciones")}
        >

          <div className="solar-icon">🛡️</div>

          <h2>Protecciones DC / AC</h2>

          <p>
            Breakers, fusibles, SPD y seccionadores.
          </p>

          <span className="badge disponible">
            Disponible
          </span>

        </div>

        <div
          className={`solar-card ${
            moduloActivo === "conductores" ? "active" : ""
          }`}
          onClick={() => setModuloActivo("conductores")}
        >

          <div className="solar-icon">📏</div>

          <h2>Conductores</h2>

          <p>
            Selección automática de conductores DC y AC.
          </p>

          <span className="badge disponible">
            Disponible
          </span>

        </div>

        <div
          className={`solar-card ${
            moduloActivo === "reportes" ? "active" : ""
          }`}
          onClick={() => setModuloActivo("reportes")}
        >

          <div className="solar-icon">📄</div>

          <h2>Reportes</h2>

          <p>
            Memoria de cálculo y lista de materiales.
          </p>

          <span className="badge disponible">
            Disponible
          </span>

        </div>

      </div>

      {moduloActivo === "diseno" && (
        <div className="solar-panel">
          <SolarCalculator />
        </div>
      )}

      {moduloActivo === "baterias" && (
        <div className="solar-panel">
          <BatteryCalculator />
        </div>
      )}

      {moduloActivo === "inversor" && (
        <div className="solar-panel">
          <InverterCalculator />
        </div>
      )}

      {moduloActivo === "protecciones" && (
        <div className="solar-panel">
          <ProtectionCalculator />
        </div>
      )}

      {moduloActivo === "conductores" && (
        <div className="solar-panel">
          <ConductorCalculator />
        </div>
      )}

      {moduloActivo === "reportes" && (
        <div className="solar-panel">
          <ReportGenerator />
        </div>
      )}

    </div>

  );

}

export default CentroSolar;