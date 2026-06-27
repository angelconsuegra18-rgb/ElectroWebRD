import { useMemo, useState } from "react";

function ConductorCalculator() {

  const [potencia, setPotencia] = useState("");
  const [voltaje, setVoltaje] = useState(220);
  const [longitud, setLongitud] = useState(20);
  const [caida, setCaida] = useState(3);

  const resultado = useMemo(() => {

    const kw = Number(potencia);

    if (!kw || kw <= 0) return null;

    const corriente = (kw * 1000) / voltaje;

    let calibre = "14 AWG";
    let mm = "2.08 mm²";

    if (corriente > 15) {
      calibre = "12 AWG";
      mm = "3.31 mm²";
    }

    if (corriente > 20) {
      calibre = "10 AWG";
      mm = "5.26 mm²";
    }

    if (corriente > 30) {
      calibre = "8 AWG";
      mm = "8.37 mm²";
    }

    if (corriente > 40) {
      calibre = "6 AWG";
      mm = "13.30 mm²";
    }

    if (corriente > 55) {
      calibre = "4 AWG";
      mm = "21.15 mm²";
    }

    if (corriente > 70) {
      calibre = "2 AWG";
      mm = "33.62 mm²";
    }

    if (corriente > 95) {
      calibre = "1/0 AWG";
      mm = "53.50 mm²";
    }

    return {

      corriente,

      calibre,

      mm,

      longitud,

      caida,

    };

  }, [

    potencia,

    voltaje,

    longitud,

    caida,

  ]);

  return (

    <div className="solar-calculator">

      <h2>📏 Selección de Conductores</h2>

      <div className="solar-form">

        <div className="form-group">

          <label>Potencia del Sistema (kW)</label>

          <input
            type="number"
            value={potencia}
            onChange={(e)=>setPotencia(e.target.value)}
          />

        </div>

        <div className="form-group">

          <label>Voltaje</label>

          <select
            value={voltaje}
            onChange={(e)=>setVoltaje(Number(e.target.value))}
          >

            <option value={120}>120 V</option>
            <option value={208}>208 V</option>
            <option value={220}>220 V</option>
            <option value={240}>240 V</option>
            <option value={480}>480 V</option>

          </select>

        </div>

        <div className="form-group">

          <label>Longitud del Circuito (m)</label>

          <input
            type="number"
            value={longitud}
            onChange={(e)=>setLongitud(Number(e.target.value))}
          />

        </div>

        <div className="form-group">

          <label>Caída de Tensión Permitida (%)</label>

          <input
            type="number"
            value={caida}
            onChange={(e)=>setCaida(Number(e.target.value))}
          />

        </div>

      </div>

      {resultado && (

        <div className="solar-results">

          <div className="result-item">

            <strong>Corriente</strong>

            <span>{resultado.corriente.toFixed(2)} A</span>

          </div>

          <div className="result-item">

            <strong>Calibre Recomendado</strong>

            <span>{resultado.calibre}</span>

          </div>

          <div className="result-item">

            <strong>Sección</strong>

            <span>{resultado.mm}</span>

          </div>

          <div className="result-item">

            <strong>Longitud</strong>

            <span>{resultado.longitud} m</span>

          </div>

          <div className="result-item">

            <strong>Caída de Tensión</strong>

            <span>{resultado.caida} %</span>

          </div>

          <div className="result-item">

            <strong>Canalización Recomendada</strong>

            <span>Tubería EMT o PVC según instalación</span>

          </div>

        </div>

      )}

    </div>

  );

}

export default ConductorCalculator;