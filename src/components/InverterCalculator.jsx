import { useState } from "react";
import "./OhmCalculator.css";

function InverterCalculator() {

  const [loadPower, setLoadPower] = useState("");
  const [safetyFactor, setSafetyFactor] = useState("25");
  const [voltage, setVoltage] = useState("48");
  const [result, setResult] = useState(null);

  const calculate = () => {

    const power = Number(loadPower);
    const safety = Number(safetyFactor);

    if (!power) {
      alert("Ingrese la potencia total de las cargas.");
      return;
    }

    const recommendedPower =
      power * (1 + safety / 100);

    const current =
      recommendedPower / Number(voltage);

    const commercialSizes = [
      300,
      500,
      1000,
      1500,
      2000,
      3000,
      5000,
      6000,
      8000,
      10000,
      12000,
      15000,
    ];

    const recommendedSize =
      commercialSizes.find(
        size => size >= recommendedPower
      ) || Math.ceil(recommendedPower);

    setResult({
      recommendedPower,
      current,
      recommendedSize,
    });

  };

  return (

    <section className="ohm-page">

      <h1 className="page-title">
        ⚡ Selección de Inversor
      </h1>

      <div className="ohm-card">

        <div className="form-grid">

          <div className="campo">

            <label>Potencia total de las cargas (W)</label>

            <input
              type="number"
              placeholder="Ej: 2500"
              value={loadPower}
              onChange={(e)=>setLoadPower(e.target.value)}
            />

          </div>

          <div className="campo">

            <label>Factor de seguridad (%)</label>

            <input
              type="number"
              value={safetyFactor}
              onChange={(e)=>setSafetyFactor(e.target.value)}
            />

          </div>

          <div className="campo">

            <label>Voltaje del sistema</label>

            <select
              value={voltage}
              onChange={(e)=>setVoltage(e.target.value)}
            >
              <option value="12">12 V</option>
              <option value="24">24 V</option>
              <option value="48">48 V</option>
            </select>

          </div>

          <div className="campo boton-calcular">

            <button onClick={calculate}>
              ⚡ Calcular
            </button>

          </div>

        </div>        <details className="info-card">

          <summary>
            📘 Información Técnica
          </summary>

          <div className="info-content">

            <h4>¿Qué hace esta calculadora?</h4>

            <p>
              Calcula la potencia mínima recomendada del inversor
              agregando un margen de seguridad para soportar
              picos de arranque y futuras ampliaciones.
            </p>

            <h4>Recomendaciones</h4>

            <ul>
              <li>✔ Utilice inversores de onda senoidal pura.</li>
              <li>✔ Agregue entre 20% y 30% de margen.</li>
              <li>✔ Verifique el voltaje del banco de baterías.</li>
              <li>✔ Elija siempre el siguiente tamaño comercial disponible.</li>
            </ul>

          </div>

        </details>

        {result && (

          <div className="resultado-card">

            <h3>Resultado</h3>

            <div className="info-content">

              <p>
                <strong>Potencia recomendada:</strong>{" "}
                {result.recommendedPower.toFixed(0)} W
              </p>

              <p>
                <strong>Corriente del inversor:</strong>{" "}
                {result.current.toFixed(2)} A
              </p>

              <p>
                <strong>Inversor comercial:</strong>{" "}
                {result.recommendedSize} W
              </p>

            </div>

          </div>

        )}

      </div>

    </section>

  );

}

export default InverterCalculator;