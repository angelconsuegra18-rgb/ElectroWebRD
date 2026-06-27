import { useState } from "react";
import "./OhmCalculator.css";

const awgTable = [
  { awg: "14", mm2: 2.08, copper: 15, aluminum: 10 },
  { awg: "12", mm2: 3.31, copper: 20, aluminum: 15 },
  { awg: "10", mm2: 5.26, copper: 30, aluminum: 25 },
  { awg: "8", mm2: 8.37, copper: 40, aluminum: 35 },
  { awg: "6", mm2: 13.3, copper: 55, aluminum: 45 },
  { awg: "4", mm2: 21.2, copper: 70, aluminum: 60 },
  { awg: "2", mm2: 33.6, copper: 95, aluminum: 75 },
  { awg: "1", mm2: 42.4, copper: 110, aluminum: 90 },
  { awg: "1/0", mm2: 53.5, copper: 125, aluminum: 100 },
  { awg: "2/0", mm2: 67.4, copper: 145, aluminum: 115 },
  { awg: "3/0", mm2: 85, copper: 165, aluminum: 130 },
  { awg: "4/0", mm2: 107, copper: 195, aluminum: 150 },
];

function AWGCalculator() {

  const [mode, setMode] = useState("ampsToCable");
  const [material, setMaterial] = useState("Cobre");
  const [current, setCurrent] = useState("");
  const [selectedCable, setSelectedCable] = useState("14");
  const [result, setResult] = useState(null);

  const calculate = () => {

    if (mode === "ampsToCable") {

      const amps = Number(current);

      if (!amps || amps <= 0) {
        alert("Ingrese una corriente válida.");
        return;
      }

      const cable = awgTable.find(
        item =>
          amps <=
          (material === "Cobre"
            ? item.copper
            : item.aluminum)
      );

      if (!cable) {
        alert("La corriente excede la capacidad de la tabla.");
        return;
      }

      setResult({
        mode,
        material,
        ...cable,
        max:
          material === "Cobre"
            ? cable.copper
            : cable.aluminum,
      });

    } else {

      const cable = awgTable.find(
        item => item.awg === selectedCable
      );

      setResult({
        mode,
        material,
        ...cable,
        max:
          material === "Cobre"
            ? cable.copper
            : cable.aluminum,
      });

    }

  };

  return (

    <section className="ohm-page">

      <h1 className="page-title">
        ⚡ Selección de Cable AWG
      </h1>

      <div className="ohm-card">

        <div className="form-grid">

          <div className="campo">

            <label>Modo de cálculo</label>

            <select
              value={mode}
              onChange={(e)=>{
                setMode(e.target.value);
                setResult(null);
              }}
            >
              <option value="ampsToCable">
                Corriente → Cable AWG
              </option>

              <option value="cableToAmps">
                Cable AWG → Corriente
              </option>

            </select>

          </div>

          <div className="campo">

            <label>Material</label>

            <select
              value={material}
              onChange={(e)=>setMaterial(e.target.value)}
            >
              <option>Cobre</option>
              <option>Aluminio</option>
            </select>

          </div>          {mode === "ampsToCable" ? (

            <div className="campo">

              <label>Corriente (A)</label>

              <input
                type="number"
                value={current}
                placeholder="Ej: 25"
                onChange={(e)=>setCurrent(e.target.value)}
              />

            </div>

          ) : (

            <div className="campo">

              <label>Calibre del cable (AWG)</label>

              <select
                value={selectedCable}
                onChange={(e)=>setSelectedCable(e.target.value)}
              >
                {awgTable.map((item)=>(
                  <option
                    key={item.awg}
                    value={item.awg}
                  >
                    AWG {item.awg}
                  </option>
                ))}
              </select>

            </div>

          )}

          <div className="campo boton-calcular">

            <button onClick={calculate}>
              ⚡ Calcular
            </button>

          </div>

        </div>

        <details className="info-card">

          <summary>
            📘 Información Técnica
          </summary>

          <div className="info-content">

            <h4>¿Qué es el sistema AWG?</h4>

            <p>
              AWG (American Wire Gauge) es el estándar utilizado para
              definir el diámetro de los conductores eléctricos.
              Mientras menor es el número AWG, mayor es el diámetro
              del conductor y mayor la corriente que puede transportar.
            </p>

            <h4>Cobre vs Aluminio</h4>

            <ul>
              <li>✔ El cobre posee mayor conductividad eléctrica.</li>
              <li>✔ El aluminio requiere calibres mayores.</li>
              <li>✔ Siempre debe verificarse la caída de tensión.</li>
              <li>✔ Consulte NEC, IEC o la normativa local.</li>
            </ul>

          </div>

        </details>

        {result && (

          <div className="resultado-card">

            <h3>Resultado</h3>

            <div className="info-content">

              <p>
                <strong>Material:</strong> {result.material}
              </p>

              <p>
                <strong>Cable recomendado:</strong> AWG {result.awg}
              </p>

              <p>
                <strong>Área:</strong> {result.mm2} mm²
              </p>

              <p>
                <strong>Corriente máxima:</strong> {result.max} A
              </p>

            </div>

          </div>

        )}

      </div>

    </section>

  );

}

export default AWGCalculator;