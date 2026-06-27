import { useState } from "react";
import "./OhmCalculator.css";

function ChargeControllerCalculator() {

  const [panelPower, setPanelPower] = useState("");
  const [voltage, setVoltage] = useState("48");
  const [controllerType, setControllerType] = useState("MPPT");
  const [result, setResult] = useState(null);

  const calculate = () => {

    const power = Number(panelPower);
    const volts = Number(voltage);

    if (!power || !volts) {
      alert("Complete todos los campos.");
      return;
    }

    const current = (power / volts) * 1.25;

    const commercialControllers = [
      20,30,40,50,60,80,100,120
    ];

    const recommended =
      commercialControllers.find(
        item => item >= current
      ) || Math.ceil(current);

    setResult({
      current,
      recommended,
    });

  };

  return (

    <section className="ohm-page">

      <h1 className="page-title">
        ⚡ Controlador de Carga
      </h1>

      <div className="ohm-card">

        <div className="form-grid">

          <div className="campo">

            <label>Potencia total de paneles (W)</label>

            <input
              type="number"
              placeholder="Ej: 2200"
              value={panelPower}
              onChange={(e)=>setPanelPower(e.target.value)}
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

            <label>Tipo de controlador</label>

            <select
              value={controllerType}
              onChange={(e)=>setControllerType(e.target.value)}
            >
              <option value="MPPT">
                MPPT
              </option>

              <option value="PWM">
                PWM
              </option>

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

            <h4>¿Qué es un controlador de carga?</h4>

            <p>
              Regula la energía proveniente de los paneles solares
              hacia el banco de baterías, evitando sobrecargas y
              descargas excesivas.
            </p>

            <h4>Recomendaciones</h4>

            <ul>
              <li>✔ MPPT ofrece una eficiencia entre 95% y 99%.</li>
              <li>✔ PWM es una opción económica para sistemas pequeños.</li>
              <li>✔ Dimensione siempre el controlador con un 25% de margen.</li>
              <li>✔ Verifique el voltaje del banco de baterías.</li>
            </ul>

          </div>

        </details>

        {result && (

          <div className="resultado-card">

            <h3>Resultado</h3>

            <div className="info-content">

              <p>
                <strong>Tipo:</strong> {controllerType}
              </p>

              <p>
                <strong>Corriente requerida:</strong>{" "}
                {result.current.toFixed(2)} A
              </p>

              <p>
                <strong>Controlador recomendado:</strong>{" "}
                {result.recommended} A
              </p>

            </div>

          </div>

        )}

      </div>

    </section>

  );

}

export default ChargeControllerCalculator;