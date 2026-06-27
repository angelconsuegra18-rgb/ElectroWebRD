import { useMemo, useState } from "react";

function ProtectionCalculator() {

  const [potencia, setPotencia] = useState("");
  const [voltaje, setVoltaje] = useState(220);
  const [tipoSistema, setTipoSistema] = useState("On-Grid");
  const [factorSeguridad, setFactorSeguridad] = useState(125);

  const resultado = useMemo(() => {

    const kw = Number(potencia);

    if (!kw || kw <= 0) return null;

    const corriente =
      (kw * 1000) / voltaje;

    const corrienteProteccion =
      corriente * (factorSeguridad / 100);

    const breaker =
      Math.ceil(corrienteProteccion / 5) * 5;

    const fusible =
      Math.ceil(corrienteProteccion / 5) * 5;

    const spd =
      voltaje <= 150
        ? "SPD DC 150 V"
        : voltaje <= 600
        ? "SPD DC 600 V"
        : "SPD DC 1000 V";

    return {

      corriente,

      breaker,

      fusible,

      spd,

    };

  }, [

    potencia,

    voltaje,

    factorSeguridad,

  ]);

  return (

    <div className="solar-calculator">

      <h2>🛡️ Protecciones DC / AC</h2>

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

          <label>Factor de Protección (%)</label>

          <input
            type="number"
            value={factorSeguridad}
            onChange={(e)=>setFactorSeguridad(Number(e.target.value))}
          />

        </div>

      </div>

      {resultado && (

        <div className="solar-results">

          <div className="result-item">
            <strong>Corriente Calculada</strong>
            <span>{resultado.corriente.toFixed(2)} A</span>
          </div>

          <div className="result-item">
            <strong>Breaker Recomendado</strong>
            <span>{resultado.breaker} A</span>
          </div>

          <div className="result-item">
            <strong>Fusible DC</strong>
            <span>{resultado.fusible} A</span>
          </div>

          <div className="result-item">
            <strong>SPD Recomendado</strong>
            <span>{resultado.spd}</span>
          </div>

          <div className="result-item">
            <strong>Seccionador</strong>
            <span>{resultado.breaker} A DC</span>
          </div>

          <div className="result-item">
            <strong>Sistema</strong>
            <span>{tipoSistema}</span>
          </div>

        </div>

      )}

    </div>

  );

}

export default ProtectionCalculator;