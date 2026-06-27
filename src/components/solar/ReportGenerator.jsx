import { useState } from "react";

function ReportGenerator() {

  const [cliente, setCliente] = useState("");
  const [proyecto, setProyecto] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [ingeniero, setIngeniero] = useState("");

  return (

    <div className="solar-calculator">

      <h2>📄 Reporte del Proyecto Solar</h2>

      <div className="solar-form">

        <div className="form-group">

          <label>Cliente</label>

          <input
            value={cliente}
            onChange={(e)=>setCliente(e.target.value)}
            placeholder="Nombre del cliente"
          />

        </div>

        <div className="form-group">

          <label>Proyecto</label>

          <input
            value={proyecto}
            onChange={(e)=>setProyecto(e.target.value)}
            placeholder="Proyecto Solar"
          />

        </div>

        <div className="form-group">

          <label>Ubicación</label>

          <input
            value={ubicacion}
            onChange={(e)=>setUbicacion(e.target.value)}
            placeholder="Ciudad / País"
          />

        </div>

        <div className="form-group">

          <label>Ingeniero Responsable</label>

          <input
            value={ingeniero}
            onChange={(e)=>setIngeniero(e.target.value)}
            placeholder="Nombre del Ingeniero"
          />

        </div>

      </div>

      <div className="solar-results">

        <div className="result-item">

          <strong>Cliente</strong>

          <span>
            {cliente || "No especificado"}
          </span>

        </div>

        <div className="result-item">

          <strong>Proyecto</strong>

          <span>
            {proyecto || "No especificado"}
          </span>

        </div>

        <div className="result-item">

          <strong>Ubicación</strong>

          <span>
            {ubicacion || "No especificada"}
          </span>

        </div>

        <div className="result-item">

          <strong>Ingeniero</strong>

          <span>
            {ingeniero || "No especificado"}
          </span>

        </div>

        <div className="result-item">

          <strong>Estado</strong>

          <span>
            Listo para generar memoria de cálculo.
          </span>

        </div>

      </div>

      <div style={{marginTop:"30px"}}>

        <button className="btn-primary">

          📄 Generar Reporte PDF

        </button>

      </div>

    </div>

  );

}

export default ReportGenerator;