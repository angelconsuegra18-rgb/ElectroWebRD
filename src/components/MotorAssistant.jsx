import { useState } from "react";

import MotorSearch from "./MotorSearch";
import MotorByHP from "./MotorByHP";
import MotorByCurrent from "./MotorByCurrent";
import MotorByKW from "./MotorByKW";
import MotorByRPM from "./MotorByRPM";
import MotorPlate from "./MotorPlate";

function MotorAssistant() {

  const [mode, setMode] = useState("search");

  return (

    <div>

      <h2
        style={{
          fontSize:"40px",
          color:"#fff",
          marginBottom:"10px"
        }}
      >
        🤖 Asistente Inteligente de Motores
      </h2>

      <p
        style={{
          color:"#bfc7d8",
          fontSize:"18px",
          marginBottom:"30px"
        }}
      >
        Escribe los datos que conoces o selecciona un modo de búsqueda.
      </p>

      <div
        style={{
          background:"#18233a",
          border:"1px solid rgba(255,255,255,.08)",
          borderRadius:"18px",
          padding:"25px",
          marginBottom:"35px"
        }}
      >

        <label
          style={{
            display:"block",
            marginBottom:"12px",
            fontWeight:"700",
            color:"#fff"
          }}
        >
          Modo de búsqueda
        </label>

        <select
          value={mode}
          onChange={(e)=>setMode(e.target.value)}
          style={{
            width:"100%",
            padding:"16px",
            borderRadius:"12px",
            background:"#111827",
            color:"#fff",
            border:"1px solid #2d3b52",
            fontSize:"16px"
          }}
        >

          <option value="search">
            🤖 Escribir descripción del motor
          </option>

          <option value="hp">
            Buscar por HP
          </option>

          <option value="amps">
            Buscar por Corriente
          </option>

          <option value="kw">
            Buscar por kW
          </option>

          <option value="rpm">
            Buscar por RPM
          </option>

          <option value="plate">
            Interpretar Placa
          </option>

        </select>

      </div>

      {mode === "search" && <MotorSearch />}

      {mode === "hp" && <MotorByHP />}

      {mode === "amps" && <MotorByCurrent />}

      {mode === "kw" && <MotorByKW />}

      {mode === "rpm" && <MotorByRPM />}

      {mode === "plate" && <MotorPlate />}

    </div>

  );

}

export default MotorAssistant;