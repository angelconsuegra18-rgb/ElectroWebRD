import { useState } from "react";

import { parseMotorText } from "../utils/motorParser";
import { findMotor } from "../utils/motorEngine";

import MotorInfoCard from "./MotorInfoCard";
import MotorRecommendationCard from "./MotorRecommendationCard";

function MotorSearch() {

  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const search = () => {

    const data = parseMotorText(text);

    const motor = findMotor(data);

    if (!motor) {
      alert("No se encontró un motor con esos datos.");
      return;
    }

    let current;

    if (data.voltage) {

      current = motor.currents[String(data.voltage)];

    } else {

      current =
        motor.currents["460"] ??
        Object.values(motor.currents)[0];

    }

    const torque = (9550 * motor.kw) / motor.rpm;

    setResult({
      ...motor,
      current,
      torque,
      frequency: motor.frequency,
    });

  };

  return (

    <div>

      <div
        style={{
          background:"#18233a",
          border:"1px solid rgba(255,255,255,.08)",
          borderRadius:"18px",
          padding:"28px"
        }}
      >

        <label
          style={{
            display:"block",
            color:"#fff",
            marginBottom:"12px",
            fontWeight:"700",
            fontSize:"18px"
          }}
        >
          Describe el motor
        </label>

        <textarea
          rows={7}
          value={text}
          onChange={(e)=>setText(e.target.value)}
          placeholder="Ejemplo: Tengo un motor trifásico de 15 HP, 460 V, 1800 RPM, 60 Hz..."
          style={{
            width:"100%",
            background:"#0f172a",
            color:"#fff",
            border:"1px solid #2d3b52",
            borderRadius:"14px",
            padding:"18px",
            fontSize:"16px",
            resize:"vertical",
            marginBottom:"25px"
          }}
        />

        <button
          onClick={search}
          style={{
            width:"100%",
            background:"#2563eb",
            color:"#fff",
            border:"none",
            borderRadius:"12px",
            padding:"18px",
            fontSize:"18px",
            fontWeight:"700",
            cursor:"pointer"
          }}
        >
          🔍 Buscar Motor
        </button>

      </div>

      {result && (

        <div style={{marginTop:"35px"}}>

          <MotorInfoCard motor={result} />

          <div style={{height:"20px"}} />

          <MotorRecommendationCard motor={result} />

        </div>

      )}

    </div>

  );

}

export default MotorSearch;