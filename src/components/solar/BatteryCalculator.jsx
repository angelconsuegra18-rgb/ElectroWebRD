import { useMemo, useState } from "react";

function BatteryCalculator() {
  const [tipo, setTipo] = useState("Litio LiFePO4");
  const [consumo, setConsumo] = useState("");
  const [autonomia, setAutonomia] = useState(1);
  const [voltajeBanco, setVoltajeBanco] = useState(48);
  const [voltajeBateria, setVoltajeBateria] = useState(12);
  const [capacidad, setCapacidad] = useState(100);
  const [dod, setDod] = useState(80);
  const [seguridad, setSeguridad] = useState(20);

  const resultado = useMemo(() => {

    const consumoDia = Number(consumo);

    if (!consumoDia || consumoDia <= 0) return null;

    const energia =
      consumoDia *
      autonomia *
      (1 + seguridad / 100);

    const capacidadBanco =
      (energia * 1000) /
      (voltajeBanco * (dod / 100));

    const serie =
      voltajeBanco / voltajeBateria;

    const paralelo =
      Math.ceil(
        capacidadBanco / capacidad
      );

    const total =
      serie * paralelo;

    return {

      energia,

      capacidadBanco,

      serie,

      paralelo,

      total,

    };

  }, [

    consumo,

    autonomia,

    voltajeBanco,

    voltajeBateria,

    capacidad,

    dod,

    seguridad,

  ]);

  return (

    <div className="solar-calculator">

      <h2>🔋 Banco de Baterías</h2>

      <div className="solar-form">

        <div className="form-group">

          <label>Tipo de Batería</label>

          <select
            value={tipo}
            onChange={(e)=>setTipo(e.target.value)}
          >

            <option>Litio LiFePO4</option>
            <option>AGM</option>
            <option>Gel</option>

          </select>

        </div>

        <div className="form-group">

          <label>Consumo Diario (kWh)</label>

          <input
            type="number"
            value={consumo}
            onChange={(e)=>setConsumo(e.target.value)}
          />

        </div>

        <div className="form-group">

          <label>Días de Autonomía</label>

          <input
            type="number"
            value={autonomia}
            onChange={(e)=>setAutonomia(Number(e.target.value))}
          />

        </div>

        <div className="form-group">

          <label>Voltaje del Banco</label>

          <select
            value={voltajeBanco}
            onChange={(e)=>setVoltajeBanco(Number(e.target.value))}
          >

            <option value={12}>12 V</option>
            <option value={24}>24 V</option>
            <option value={48}>48 V</option>

          </select>

        </div>

        <div className="form-group">

          <label>Voltaje de la Batería</label>

          <select
            value={voltajeBateria}
            onChange={(e)=>setVoltajeBateria(Number(e.target.value))}
          >

            <option value={12}>12 V</option>
            <option value={24}>24 V</option>
            <option value={48}>48 V</option>

          </select>

        </div>

        <div className="form-group">

          <label>Capacidad (Ah)</label>

          <input
            type="number"
            value={capacidad}
            onChange={(e)=>setCapacidad(Number(e.target.value))}
          />

        </div>

        <div className="form-group">

          <label>Profundidad de Descarga (%)</label>

          <input
            type="number"
            value={dod}
            onChange={(e)=>setDod(Number(e.target.value))}
          />

        </div>

        <div className="form-group">

          <label>Factor de Seguridad (%)</label>

          <input
            type="number"
            value={seguridad}
            onChange={(e)=>setSeguridad(Number(e.target.value))}
          />

        </div>

      </div>

      {resultado && (

        <div className="solar-results">

          <div className="result-item">
            <strong>Energía Requerida</strong>
            <span>{resultado.energia.toFixed(2)} kWh</span>
          </div>

          <div className="result-item">
            <strong>Capacidad del Banco</strong>
            <span>{resultado.capacidadBanco.toFixed(0)} Ah</span>
          </div>

          <div className="result-item">
            <strong>Baterías en Serie</strong>
            <span>{resultado.serie}</span>
          </div>

          <div className="result-item">
            <strong>Ramas en Paralelo</strong>
            <span>{resultado.paralelo}</span>
          </div>

          <div className="result-item">
            <strong>Total de Baterías</strong>
            <span>{resultado.total}</span>
          </div>

          <div className="result-item">
            <strong>Tipo Seleccionado</strong>
            <span>{tipo}</span>
          </div>

        </div>

      )}

    </div>

  );

}

export default BatteryCalculator;