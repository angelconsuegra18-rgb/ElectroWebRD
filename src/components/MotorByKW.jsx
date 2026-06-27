import { useState } from "react";
import { motors } from "../data/motors";

import MotorForm from "./MotorForm";
import MotorInfoCard from "./MotorInfoCard";
import MotorRecommendationCard from "./MotorRecommendationCard";
import MotorReport from "./MotorReport";

function MotorByKW() {

  const [kw, setKw] = useState("");
  const [voltage, setVoltage] = useState("460");
  const [frequency, setFrequency] = useState("60");

  const [result, setResult] = useState(null);

  const search = () => {

    if (!kw) {
      alert("Ingrese la potencia en kW.");
      return;
    }

    const value = Number(kw);

    const motor = motors.find(
      (item) => Math.abs(item.kw - value) <= 0.5
    );

    if (!motor) {
      alert("No se encontró un motor con esa potencia.");
      return;
    }

    const torque = (9550 * motor.kw) / motor.rpm;

    setResult({
      ...motor,
      current: motor.currents[voltage],
      frequency,
      torque,
    });

  };

  return (

    <>

      <MotorForm
        title="⚡ Buscar Motor por kW"
        buttonText="Buscar Motor"
        onSubmit={search}
      >

        <div>

          <label
            style={{
              display:"block",
              color:"#fff",
              marginBottom:"10px",
              fontWeight:"600"
            }}
          >
            Potencia (kW)
          </label>

          <input
            type="number"
            step="0.1"
            value={kw}
            onChange={(e)=>setKw(e.target.value)}
            placeholder="Ej. 11.2"
            style={{
              width:"100%",
              padding:"15px",
              borderRadius:"12px",
              background:"#0f172a",
              border:"1px solid #2d3b52",
              color:"#fff"
            }}
          />

        </div>

        <div>

          <label
            style={{
              display:"block",
              color:"#fff",
              marginBottom:"10px",
              fontWeight:"600"
            }}
          >
            Voltaje
          </label>

          <select
            value={voltage}
            onChange={(e)=>setVoltage(e.target.value)}
            style={{
              width:"100%",
              padding:"15px",
              borderRadius:"12px",
              background:"#0f172a",
              border:"1px solid #2d3b52",
              color:"#fff"
            }}
          >
            <option value="120">120 V</option>
            <option value="208">208 V</option>
            <option value="230">230 V</option>
            <option value="460">460 V</option>
            <option value="575">575 V</option>
          </select>

        </div>

        <div>

          <label
            style={{
              display:"block",
              color:"#fff",
              marginBottom:"10px",
              fontWeight:"600"
            }}
          >
            Frecuencia
          </label>

          <select
            value={frequency}
            onChange={(e)=>setFrequency(e.target.value)}
            style={{
              width:"100%",
              padding:"15px",
              borderRadius:"12px",
              background:"#0f172a",
              border:"1px solid #2d3b52",
              color:"#fff"
            }}
          >
            <option value="50">50 Hz</option>
            <option value="60">60 Hz</option>
          </select>

        </div>

      </MotorForm>

      {result && (

        <div style={{marginTop:"35px"}}>

          <MotorInfoCard motor={result} />

          <div style={{height:"20px"}} />

          <MotorRecommendationCard motor={result} />

          <div style={{height:"20px"}} />

          <MotorReport motor={result} />

        </div>

      )}

    </>

  );

}

export default MotorByKW;