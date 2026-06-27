import { useState } from "react";

function MotorFeederDesigner() {

  const [motorHP, setMotorHP] = useState("");
  const [voltage, setVoltage] = useState("460");
  const [distance, setDistance] = useState("");
  const [material, setMaterial] = useState("Cobre");
  const [phase, setPhase] = useState("Trifásico");

  return (

    <div className="calculator">

      <h2>⚡ Diseñador de Alimentación</h2>

      <div className="form-group">
        <label>Potencia del motor (HP)</label>

        <input
          type="number"
          value={motorHP}
          onChange={(e)=>setMotorHP(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Voltaje</label>

        <select
          value={voltage}
          onChange={(e)=>setVoltage(e.target.value)}
        >
          <option>208</option>
          <option>230</option>
          <option>460</option>
          <option>575</option>
        </select>

      </div>

      <div className="form-group">

        <label>Fases</label>

        <select
          value={phase}
          onChange={(e)=>setPhase(e.target.value)}
        >
          <option>Monofásico</option>
          <option>Trifásico</option>
        </select>

      </div>

      <div className="form-group">

        <label>Longitud (m)</label>

        <input
          type="number"
          value={distance}
          onChange={(e)=>setDistance(e.target.value)}
        />

      </div>

      <div className="form-group">

        <label>Material</label>

        <select
          value={material}
          onChange={(e)=>setMaterial(e.target.value)}
        >
          <option>Cobre</option>
          <option>Aluminio</option>
        </select>

      </div>

      <button>
        Diseñar Alimentación
      </button>

    </div>

  );

}

export default MotorFeederDesigner;