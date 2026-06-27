import { useState } from "react";
import "./OhmCalculator.css";

function VoltageDropCalculator() {
  const [voltaje, setVoltaje] = useState("");
  const [corriente, setCorriente] = useState("");
  const [distancia, setDistancia] = useState("");
  const [seccion, setSeccion] = useState("");
  const [material, setMaterial] = useState("cobre");
  const [resultado, setResultado] = useState(null);

  function calcular() {
    if (
      voltaje === "" ||
      corriente === "" ||
      distancia === "" ||
      seccion === ""
    ) {
      alert("Complete todos los campos.");
      return;
    }

    const rho = material === "cobre" ? 0.0175 : 0.0282;

    const dv =
      (2 * Number(distancia) * Number(corriente) * rho) /
      Number(seccion);

    const porcentaje = (dv / Number(voltaje)) * 100;

    setResultado({
      dv: dv.toFixed(2),
      porcentaje: porcentaje.toFixed(2),
    });
  }

  return (
    <section className="ohm-page">

      <h1 className="page-title">
        ⚡ Calculadora de Caída de Tensión
      </h1>

      <div className="ohm-card">

        <div className="form-grid">

          <div className="campo">
            <label>Voltaje del circuito (V)</label>

            <input
              type="number"
              placeholder="Ej: 220"
              value={voltaje}
              onChange={(e) => setVoltaje(e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Corriente (A)</label>

            <input
              type="number"
              placeholder="Ej: 15"
              value={corriente}
              onChange={(e) => setCorriente(e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Longitud del cable (m)</label>

            <input
              type="number"
              placeholder="Ej: 30"
              value={distancia}
              onChange={(e) => setDistancia(e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Sección del cable (mm²)</label>

            <input
              type="number"
              placeholder="Ej: 4"
              value={seccion}
              onChange={(e) => setSeccion(e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Material</label>

            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            >
              <option value="cobre">Cobre</option>
              <option value="aluminio">Aluminio</option>
            </select>
          </div>

          <div className="campo boton-calcular">
            <button onClick={calcular}>
              ⚡ Calcular
            </button>
          </div>

        </div>

        {resultado && (

          <div className="resultado-card">

            <h3>Resultado</h3>

            <div className="info-content">

              <p>
                <strong>Caída de tensión:</strong> {resultado.dv} V
              </p>

              <p>
                <strong>Porcentaje:</strong> {resultado.porcentaje} %
              </p>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default VoltageDropCalculator;