import { useState } from "react";
import "./OhmCalculator.css";

function SolarPanelCalculator() {

  const [dailyKwh, setDailyKwh] = useState("");
  const [hsp, setHsp] = useState("");
  const [panelPower, setPanelPower] = useState("550");
  const [losses, setLosses] = useState("80");

  const [result, setResult] = useState(null);

  const calculate = () => {

    const consumption = Number(dailyKwh);
    const sunHours = Number(hsp);
    const power = Number(panelPower);
    const efficiency = Number(losses) / 100;

    if (!consumption || !sunHours || !power || !efficiency) {
      alert("Complete todos los campos.");
      return;
    }

    const dailyWh = consumption * 1000;

    const requiredPower =
      dailyWh / (sunHours * efficiency);

    const panels = Math.ceil(
      requiredPower / power
    );

    const installedPower =
      panels * power;

    const generatedEnergy =
      (installedPower *
        sunHours *
        efficiency) / 1000;

    setResult({
      requiredPower,
      panels,
      installedPower,
      generatedEnergy,
    });

  };

  return (

    <section className="ohm-page">

      <h1 className="page-title">
        ☀️ Dimensionamiento de Paneles Solares
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

            <label>Horas Solares Pico</label>

            <input
              type="number"
              placeholder="Ej: 5.5"
              value={hsp}
              onChange={(e)=>setHsp(e.target.value)}
            />

          </div>

          <div className="campo">

            <label>Potencia del panel (W)</label>

            <input
              type="number"
              value={panelPower}
              onChange={(e)=>setPanelPower(e.target.value)}
            />

          </div>

          <div className="campo">

            <label>Factor de pérdidas (%)</label>

            <input
              type="number"
              value={losses}
              onChange={(e)=>setLosses(e.target.value)}
            />

          </div>

          <div className="campo boton-calcular">

            <button onClick={calculate}>
              ☀️ Calcular
            </button>

          </div>

        </div>        <details className="info-card">

          <summary>
            📘 Información Técnica
          </summary>

          <div className="info-content">

            <h4>¿Qué calcula esta herramienta?</h4>

            <p>
              Calcula la cantidad de paneles solares necesarios para
              cubrir el consumo diario considerando las Horas Solares
              Pico (HSP) y las pérdidas del sistema.
            </p>

            <h4>Recomendaciones</h4>

            <ul>
              <li>✔ Utilice las HSP reales de la ubicación.</li>
              <li>✔ Considere pérdidas entre 75% y 85%.</li>
              <li>✔ Deje margen para futuras ampliaciones.</li>
              <li>✔ Verifique siempre el inversor y las baterías.</li>
            </ul>

          </div>

        </details>

        {result && (

          <div className="resultado-card">

            <h3>Resultado</h3>

            <div className="info-content">

              <p>
                <strong>Potencia requerida:</strong>{" "}
                {result.requiredPower.toFixed(0)} W
              </p>

              <p>
                <strong>Paneles necesarios:</strong>{" "}
                {result.panels}
              </p>

              <p>
                <strong>Potencia instalada:</strong>{" "}
                {result.installedPower} W
              </p>

              <p>
                <strong>Energía generada:</strong>{" "}
                {result.generatedEnergy.toFixed(2)} kWh/día
              </p>

            </div>

          </div>

        )}

      </div>

    </section>

  );

}

export default SolarPanelCalculator;