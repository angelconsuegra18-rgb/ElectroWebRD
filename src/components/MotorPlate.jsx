import { useState } from "react";
import MotorForm from "./MotorForm";

function MotorPlate() {

  const [plate, setPlate] = useState({
    hp:"",
    kw:"",
    voltage:"",
    current:"",
    rpm:"",
    frequency:"60",
    pf:"",
    efficiency:"",
    serviceFactor:"",
    frame:"",
    insulation:"",
  });

  const update = (field,value)=>{
    setPlate({
      ...plate,
      [field]:value,
    });
  };

  const inputStyle={
    width:"100%",
    padding:"15px",
    borderRadius:"12px",
    background:"#0f172a",
    border:"1px solid #2d3b52",
    color:"#fff",
    fontSize:"16px"
  };

  const labelStyle={
    display:"block",
    marginBottom:"10px",
    color:"#fff",
    fontWeight:"600"
  };

  return (

    <MotorForm
      title="📋 Interpretador de Placa"
      buttonText="Analizar Placa"
      onSubmit={()=>alert("Próximamente disponible")}
    >

      <div>

        <label style={labelStyle}>Potencia (HP)</label>

        <input
          style={inputStyle}
          value={plate.hp}
          onChange={(e)=>update("hp",e.target.value)}
        />

      </div>

      <div>

        <label style={labelStyle}>Potencia (kW)</label>

        <input
          style={inputStyle}
          value={plate.kw}
          onChange={(e)=>update("kw",e.target.value)}
        />

      </div>

      <div>

        <label style={labelStyle}>Voltaje</label>

        <input
          style={inputStyle}
          value={plate.voltage}
          onChange={(e)=>update("voltage",e.target.value)}
        />

      </div>

      <div>

        <label style={labelStyle}>Corriente</label>

        <input
          style={inputStyle}
          value={plate.current}
          onChange={(e)=>update("current",e.target.value)}
        />

      </div>

      <div>

        <label style={labelStyle}>Velocidad (RPM)</label>

        <input
          style={inputStyle}
          value={plate.rpm}
          onChange={(e)=>update("rpm",e.target.value)}
        />

      </div>

      <div>

        <label style={labelStyle}>Frecuencia</label>

        <select
          style={inputStyle}
          value={plate.frequency}
          onChange={(e)=>update("frequency",e.target.value)}
        >
          <option value="50">50 Hz</option>
          <option value="60">60 Hz</option>
        </select>

      </div>

      <div>

        <label style={labelStyle}>Factor de Potencia</label>

        <input
          style={inputStyle}
          value={plate.pf}
          onChange={(e)=>update("pf",e.target.value)}
        />

      </div>

      <div>

        <label style={labelStyle}>Eficiencia (%)</label>

        <input
          style={inputStyle}
          value={plate.efficiency}
          onChange={(e)=>update("efficiency",e.target.value)}
        />

      </div>

      <div>

        <label style={labelStyle}>Factor de Servicio</label>

        <input
          style={inputStyle}
          value={plate.serviceFactor}
          onChange={(e)=>update("serviceFactor",e.target.value)}
        />

      </div>

      <div>

        <label style={labelStyle}>Frame NEMA</label>

        <input
          style={inputStyle}
          value={plate.frame}
          onChange={(e)=>update("frame",e.target.value)}
        />

      </div>

      <div>

        <label style={labelStyle}>Clase de Aislamiento</label>

        <input
          style={inputStyle}
          value={plate.insulation}
          onChange={(e)=>update("insulation",e.target.value)}
        />

      </div>

    </MotorForm>

  );

}

export default MotorPlate;