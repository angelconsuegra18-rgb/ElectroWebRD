import { useMemo, useState } from "react";
import { solarInverters } from "./solarData";

function InverterCalculator() {

  const [tipoSistema, setTipoSistema] = useState("On-Grid");
  const [potencia, setPotencia] = useState("");
  const [voltaje, setVoltaje] = useState(220);
  const [fase, setFase] = useState("Monofásico");
  const [crecimiento, setCrecimiento] = useState(20);

  const resultado = useMemo(() => {

    const kw = Number(potencia);

    if (!kw || kw <= 0) return null;

    const potenciaRequerida =
      kw * (1 + crecimiento / 100);

    const compatible =
      solarInverters.find(
        item =>
          item.tipo === tipoSistema &&
          item.potencia >= potenciaRequerida
      );

    return {

      potenciaRequerida,

      inversor: compatible ||

      {
        marca: "No disponible",
        modelo: "No existe un equipo registrado",
        potencia: potenciaRequerida.toFixed(1)
      }

    };

  }, [

    potencia,
    crecimiento,
    tipoSistema

  ]);

  return (

    <div className="solar-calculator">

      <h2>⚡ Selección Automática de Inversor</h2>

      <div className="solar-form">

        <div className="form-group">

          <label>Tipo de Sistema</label>

          <select
            value={tipoSistema}
            onChange={(e)=>setTipoSistema(e.target.value)}
          >

            <option>On-Grid</option>
            <option>Off-Grid</option>
            <option>Híbrido</option>

          </select>

        </div>

        <div className="form-group">

          <label>Potencia requerida (kW)</label>

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

          <label>Tipo de Alimentación</label>

          <select
            value={fase}
            onChange={(e)=>setFase(e.target.value)}
          >

            <option>Monofásico</option>
            <option>Trifásico</option>

          </select>

        </div>

        <div className="form-group">

          <label>Crecimiento futuro (%)</label>

          <input
            type="number"
            value={crecimiento}
            onChange={(e)=>setCrecimiento(Number(e.target.value))}
          />

        </div>

      </div>

      {resultado && (

        <div className="solar-results">

          <div className="result-item">

            <strong>Potencia de Diseño</strong>

            <span>
              {resultado.potenciaRequerida.toFixed(2)} kW
            </span>

          </div>

          <div className="result-item">

            <strong>Marca</strong>

            <span>
              {resultado.inversor.marca}
            </span>

          </div>

          <div className="result-item">

            <strong>Modelo</strong>

            <span>
              {resultado.inversor.modelo}
            </span>

          </div>

          <div className="result-item">

            <strong>Potencia del Inversor</strong>

            <span>
              {resultado.inversor.potencia} kW
            </span>

          </div>

          <div className="result-item">

            <strong>Tipo</strong>

            <span>
              {tipoSistema}
            </span>

          </div>

          <div className="result-item">

            <strong>Voltaje</strong>

            <span>
              {voltaje} V
            </span>

          </div>

        </div>

      )}

    </div>

  );

}

export default InverterCalculator;