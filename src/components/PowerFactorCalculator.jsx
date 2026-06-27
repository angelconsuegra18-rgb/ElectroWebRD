import { useState } from "react";
import "./OhmCalculator.css";

function PowerFactorCalculator() {
  const [voltaje, setVoltaje] = useState("");
  const [corriente, setCorriente] = useState("");
  const [fp, setFp] = useState("");
  const [resultado, setResultado] = useState(null);

  function calcular() {
    if (voltaje === "" || corriente === "" || fp === "") {
      alert("Complete todos los campos.");
      return;
    }

    const VA = Number(voltaje) * Number(corriente);
    const W = VA * Number(fp);
    const VAR = Math.sqrt((VA * VA) - (W * W));

    setResultado({
      va: VA.toFixed(2),
      w: W.toFixed(2),
      var: VAR.toFixed(2),
    });
  }

  return (
    <section className="ohm-page">

      <h1 className="page-title">
        ⚡ Calculadora de Factor de Potencia
      </h1>

      <div className="ohm-card">

        <div className="form-grid">

          <div className="campo">

            <label>Voltaje (V)</label>

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

            <label>Factor de Potencia</label>

            <input
              type="number"
              step="0.01"
              placeholder="Ej: 0.92"
              value={fp}
              onChange={(e) => setFp(e.target.value)}
            />

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
                <strong>Potencia Aparente:</strong> {resultado.va} VA
              </p>

              <p>
                <strong>Potencia Activa:</strong> {resultado.w} W
              </p>

              <p>
                <strong>Potencia Reactiva:</strong> {resultado.var} VAR
              </p>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default PowerFactorCalculator;