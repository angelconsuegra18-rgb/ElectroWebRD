import { useState } from "react";
import "./OhmCalculator.css";

function OhmCalculator() {
  const [modo, setModo] = useState("potencia");

  const [voltaje, setVoltaje] = useState("");
  const [corriente, setCorriente] = useState("");
  const [potencia, setPotencia] = useState("");
  const [resistencia, setResistencia] = useState("");

  const [resultado, setResultado] = useState("--");

  const calcular = () => {
    let res = "--";

    switch (modo) {

      case "potencia":

        if (!voltaje || !corriente) {
          alert("Complete todos los campos.");
          return;
        }

        res = `${(Number(voltaje) * Number(corriente)).toFixed(2)} W`;
        break;

      case "corriente":

        if (!potencia || !voltaje) {
          alert("Complete todos los campos.");
          return;
        }

        res = `${(Number(potencia) / Number(voltaje)).toFixed(2)} A`;
        break;

      case "voltaje":

        if (!potencia || !corriente) {
          alert("Complete todos los campos.");
          return;
        }

        res = `${(Number(potencia) / Number(corriente)).toFixed(2)} V`;
        break;

      case "resistencia":

        if (!voltaje || !corriente) {
          alert("Complete todos los campos.");
          return;
        }

        res = `${(Number(voltaje) / Number(corriente)).toFixed(2)} Ω`;
        break;

      default:
        break;
    }

    setResultado(res);
  };

  return (

    <section className="ohm-page">

      <h1 className="page-title">
        ⚡ Calculadora Ley de Ohm
      </h1>

      <div className="ohm-card">

        <div className="form-grid">

          <div className="campo">

            <label>¿Qué deseas calcular?</label>

            <select
              value={modo}
              onChange={(e) => setModo(e.target.value)}
            >
              <option value="potencia">
                Potencia (P)
              </option>

              <option value="corriente">
                Corriente (I)
              </option>

              <option value="voltaje">
                Voltaje (V)
              </option>

              <option value="resistencia">
                Resistencia (R)
              </option>

            </select>

          </div>

          {modo === "potencia" && (
            <>

              <div className="campo">

                <label>Voltaje (V)</label>

                <input
                  type="number"
                  value={voltaje}
                  onChange={(e) => setVoltaje(e.target.value)}
                  placeholder="Ej: 120"
                />

              </div>

              <div className="campo">

                <label>Corriente (A)</label>

                <input
                  type="number"
                  value={corriente}
                  onChange={(e) => setCorriente(e.target.value)}
                  placeholder="Ej: 10"
                />

              </div>

            </>
          )}

          {modo === "corriente" && (
            <>              <div className="campo">

                <label>Potencia (W)</label>

                <input
                  type="number"
                  value={potencia}
                  onChange={(e) => setPotencia(e.target.value)}
                  placeholder="Ej: 1500"
                />

              </div>

              <div className="campo">

                <label>Voltaje (V)</label>

                <input
                  type="number"
                  value={voltaje}
                  onChange={(e) => setVoltaje(e.target.value)}
                  placeholder="Ej: 220"
                />

              </div>

            </>
          )}

          {modo === "voltaje" && (
            <>

              <div className="campo">

                <label>Potencia (W)</label>

                <input
                  type="number"
                  value={potencia}
                  onChange={(e) => setPotencia(e.target.value)}
                  placeholder="Ej: 2000"
                />

              </div>

              <div className="campo">

                <label>Corriente (A)</label>

                <input
                  type="number"
                  value={corriente}
                  onChange={(e) => setCorriente(e.target.value)}
                  placeholder="Ej: 9.1"
                />

              </div>

            </>
          )}

          {modo === "resistencia" && (
            <>

              <div className="campo">

                <label>Voltaje (V)</label>

                <input
                  type="number"
                  value={voltaje}
                  onChange={(e) => setVoltaje(e.target.value)}
                  placeholder="Ej: 120"
                />

              </div>

              <div className="campo">

                <label>Corriente (A)</label>

                <input
                  type="number"
                  value={corriente}
                  onChange={(e) => setCorriente(e.target.value)}
                  placeholder="Ej: 15"
                />

              </div>

            </>
          )}

          <div className="campo boton-calcular">

            <button onClick={calcular}>
              ⚡ Calcular
            </button>

          </div>

        </div>

        <div className="resultado-card">

          <h3>Resultado</h3>

          <div className="resultado-valor">
            {resultado}
          </div>

        </div>

        <details className="info-card">

          <summary>
            📘 Información Técnica
          </summary>

          <div className="info-content">

            <h4>Ley de Ohm</h4>

            <p>
              La Ley de Ohm establece la relación entre el
              voltaje (V), la corriente (I) y la resistencia (R)
              en un circuito eléctrico.
            </p>

            <div className="formula-box">

              <div>P = V × I</div>
              <div>V = I × R</div>
              <div>I = V ÷ R</div>
              <div>R = V ÷ I</div>

            </div>

            <h4 style={{ marginTop: 30 }}>
              Aplicaciones
            </h4>

            <ul>
              <li>✔ Diseño de circuitos eléctricos.</li>
              <li>✔ Selección de equipos eléctricos.</li>
              <li>✔ Diagnóstico de fallas.</li>
              <li>✔ Cálculo de consumo energético.</li>
            </ul>

          </div>

        </details>

      </div>

    </section>

  );

}

export default OhmCalculator;