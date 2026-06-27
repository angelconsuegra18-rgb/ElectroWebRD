import { useState } from "react";
import "./OhmCalculator.css";

function BatteryBankCalculator() {

  const [dailyKwh, setDailyKwh] = useState("");
  const [voltage, setVoltage] = useState("48");
  const [autonomy, setAutonomy] = useState("1");
  const [dod, setDod] = useState("80");
  const [efficiency, setEfficiency] = useState("90");

  const [result, setResult] = useState(null);

  const calculate = () => {

    const daily = Number(dailyKwh);
    const volts = Number(voltage);
    const days = Number(autonomy);
    const dodValue = Number(dod) / 100;
    const eff = Number(efficiency) / 100;

    if (!daily || !volts || !days || !dodValue || !eff) {
      alert("Complete todos los campos.");
      return;
    }

    const energyWh = daily * 1000;
    const totalWh = energyWh * days;
    const dodWh = totalWh / dodValue;
    const finalWh = dodWh / eff;
    const ah = finalWh / volts;

    setResult({
      energyWh,
      totalWh,
      finalWh,
      ah,
    });

  };

  return (

    <section className="ohm-page">

      <h1 className="page-title">
        🔋 Banco de Baterías
      </h1>

      <div className="ohm-card">

        <div className="form-grid">

          <div className="campo">

            <label>Consumo diario (kWh)</label>

            <input
              type="number"
              placeholder="Ej: 8"
              value={dailyKwh}
              onChange={(e)=>setDailyKwh(e.target.value)}
            />

          </div>

          <div className="campo">

            <label>Voltaje del banco</label>

            <select
              value={voltage}
              onChange={(e)=>setVoltage(e.target.value)}
            >
              <option value="12">12 V</option>
              <option value="24">24 V</option>
              <option value="48">48 V</option>
            </select>

          </div>

          <div className="campo">

            <label>Días de autonomía</label>

            <input
              type="number"
              value={autonomy}
              onChange={(e)=>setAutonomy(e.target.value)}
            />

          </div>

          <div className="campo">

            <label>Profundidad de descarga (%)</label>

            <input
              type="number"
              value={dod}
              onChange={(e)=>setDod(e.target.value)}
            />

          </div>

          <div className="campo">

            <label>Eficiencia (%)</label>

            <input
              type="number"
              value={efficiency}
              onChange={(e)=>setEfficiency(e.target.value)}
            />

          </div>

          <div className="campo boton-calcular">

            <button onClick={calculate}>
              🔋 Calcular
            </button>

          </div>

        </div>        {result && (

          <div className="resultado-card">

            <h3>Resultado</h3>

            <div className="info-content">

              <p>
                <strong>Energía requerida:</strong>{" "}
                {(result.finalWh / 1000).toFixed(2)} kWh
              </p>

              <p>
                <strong>Capacidad del banco:</strong>{" "}
                {result.ah.toFixed(2)} Ah
              </p>

              <p>
                <strong>Energía almacenada:</strong>{" "}
                {result.finalWh.toFixed(0)} Wh
              </p>

            </div>

          </div>

        )}

        <details className="info-card">

          <summary>
            📘 Información Técnica
          </summary>

          <div className="info-content">

            <h4>Banco de baterías</h4>

            <p>
              Esta calculadora determina la capacidad necesaria del banco
              de baterías según el consumo diario, la autonomía requerida,
              el voltaje del sistema, la profundidad de descarga y la
              eficiencia del banco.
            </p>

            <ul>
              <li>✔ Considere una profundidad de descarga adecuada para el tipo de batería.</li>
              <li>✔ Mantenga un margen para futuras ampliaciones.</li>
              <li>✔ Verifique la corriente máxima del inversor.</li>
              <li>✔ Utilice baterías certificadas para sistemas solares.</li>
            </ul>

          </div>

        </details>

      </div>

    </section>

  );

}

export default BatteryBankCalculator;