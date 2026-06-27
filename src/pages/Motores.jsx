import { useState } from "react";

import MotorAssistant from "../components/MotorAssistant";
import ProtectionAssistant from "../components/protections/ProtectionAssistant";
import ArranqueMotores from "../components/arranqueMotores/ArranqueMotores";
import VariadoresFrecuencia from "../components/variadoresFrecuencia/VariadoresFrecuencia";

function Motores() {

  const [modulo, setModulo] = useState("assistant");

  const renderModulo = () => {
    switch (modulo) {

      case "assistant":
        return <MotorAssistant />;

      case "protecciones":
        return <ProtectionAssistant />;

      case "arranque":
        return <ArranqueMotores />;

      case "variadores":
        return <VariadoresFrecuencia />;

      case "biblioteca":
        return (
          <div style={{
            textAlign: "center",
            padding: "70px 20px",
            color: "#bfc7d8"
          }}>
            <h2 style={{
              color: "#FFC107",
              marginBottom: "15px",
              fontSize: "34px"
            }}>
              📚 Biblioteca Técnica
            </h2>

            <p>
              Módulo en desarrollo
            </p>
          </div>
        );

      default:
        return (
          <div style={{
            textAlign: "center",
            padding: "70px 20px"
          }}>
            <h2 style={{
              color: "#FFC107",
              marginBottom: "15px",
              fontSize: "34px"
            }}>
              🚧 Módulo en desarrollo
            </h2>

            <p style={{
              color: "#bfc7d8",
              fontSize: "18px"
            }}>
              Esta herramienta estará disponible próximamente en ElectroWeb.
            </p>
          </div>
        );
    }
  };

  return (

    <div style={{
      maxWidth: "1450px",
      margin: "0 auto",
      padding: "40px 30px 80px",
      color: "#fff",
    }}>

      {/* HEADER */}
      <h1 style={{
        textAlign: "center",
        fontSize: "56px",
        fontWeight: "800",
        marginBottom: "12px",
      }}>
        ⚡ <span style={{ color: "#fff" }}>Centro de </span>
        <span style={{ color: "#FFC107" }}>Motores Eléctricos</span>
      </h1>

      <p style={{
        textAlign: "center",
        color: "#bfc7d8",
        fontSize: "22px",
        marginBottom: "45px"
      }}>
        Selecciona la herramienta que necesitas.
      </p>

      {/* DASHBOARD */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "22px",
        marginBottom: "40px"
      }}>

        <button className="motor-card" onClick={() => setModulo("assistant")}>
          🤖 Asistente
        </button>

        <button className="motor-card" onClick={() => setModulo("protecciones")}>
          🛡️ Protecciones
        </button>

        <button className="motor-card" onClick={() => setModulo("arranque")}>
          🚀 Arranque
        </button>

        <button className="motor-card" onClick={() => setModulo("variadores")}>
          📈 Variadores
        </button>

        <button className="motor-card" onClick={() => setModulo("biblioteca")}>
          📚 Biblioteca
        </button>

      </div>

      {/* CONTENIDO */}
      <div style={{
        marginTop: "10px",
        background: "linear-gradient(180deg,#111b31,#0d1528)",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: "22px",
        padding: "30px",
        minHeight: "500px",
        boxShadow: "0 15px 45px rgba(0,0,0,.30)"
      }}>

        {renderModulo()}

      </div>

    </div>
  );
}

export default Motores;