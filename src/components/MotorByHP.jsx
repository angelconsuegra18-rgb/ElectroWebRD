import { useState } from "react";
import { motors } from "../data/motors";

import MotorForm from "./MotorForm";
import MotorInfoCard from "./MotorInfoCard";
import MotorRecommendationCard from "./MotorRecommendationCard";
import MotorReport from "./MotorReport";

function MotorByHP() {

  const [hp, setHp] = useState("15");
  const [voltage, setVoltage] = useState("460");
  const [frequency, setFrequency] = useState("60");

  const [result, setResult] = useState(null);

  const calculate = () => {

    const motor = motors.find(
      (item) => item.hp === Number(hp)
    );

    if (!motor) {
      alert("Motor no encontrado.");
      return;
    }

    const current = motor.currents[voltage];

    if (!current) {
      alert("No existen datos para ese voltaje.");
      return;
    }

    const torque = (9550 * motor.kw) / motor.rpm;

    setResult({
      ...motor,
      current,
      torque,
      frequency,
    });

  };

  return (

    <>

      <MotorForm
        title="🔍 Buscar Motor por HP"
        buttonText="Buscar Motor"
        onSubmit={calculate}
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
            Potencia del motor (HP)
          </label>

          <input
            type="number"
            value={hp}
            onChange={(e)=>setHp(e.target.value)}
            placeholder="Ej. 15"
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

export default MotorByHP;