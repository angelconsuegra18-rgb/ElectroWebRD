import { useState } from "react";
import "./ProtectionAssistant.css";

function ProtectionAssistant() {

  const [system, setSystem] = useState("trifasico");
  const [voltage, setVoltage] = useState("460");
  const [frequency, setFrequency] = useState("60");

  const [loadType, setLoadType] = useState("motor");

  const [powerType, setPowerType] = useState("hp");
  const [power, setPower] = useState("");

  const [powerFactor, setPowerFactor] = useState("0.90");
  const [efficiency, setEfficiency] = useState("0.92");

  const [distance, setDistance] = useState("");
  const [material, setMaterial] = useState("cobre");
  const [temperature, setTemperature] = useState("30");
  const [installation, setInstallation] = useState("tuberia");

  const [result, setResult] = useState(null);

  const calculateProtections = () => {

    if (!power) return alert("Ingrese la potencia");

    let kw =
      powerType === "hp"
        ? Number(power) * 0.746
        : powerType === "kw"
        ? Number(power)
        : powerType === "w"
        ? Number(power) / 1000
        : 0;

    const V = Number(voltage);
    const pf = Number(powerFactor);
    const eff = Number(efficiency);

    let current =
      system === "trifasico"
        ? (kw * 1000) / (Math.sqrt(3) * V * pf * eff)
        : (kw * 1000) / (V * pf * eff);

    const breaker = Math.ceil(current * 1.25);
    const fuse = Math.ceil(current * 1.5);

    const relayMin = Math.ceil(current);
    const relayMax = Math.ceil(current * 1.25);

    const cable =
      current <= 15 ? "14 AWG" :
      current <= 20 ? "12 AWG" :
      current <= 30 ? "10 AWG" :
      current <= 40 ? "8 AWG" :
      current <= 55 ? "6 AWG" :
      "4 AWG";

    const voltageDrop =
      distance > 0
        ? ((2 * current * Number(distance) * 0.018) / (V * 1000)) * 100
        : 0;

    setResult({
      current: current.toFixed(2),
      breaker,
      fuse,
      relayMin,
      relayMax,
      cable,
      voltageDrop: voltageDrop.toFixed(2)
    });
  };

  return (
    <div className="protection-page">

      <div className="protection-card">

        <h1 className="protection-title">
          🛡️ Asistente Inteligente de Protecciones
        </h1>

        <p className="protection-subtitle">
          Complete los datos de la instalación para obtener recomendaciones eléctricas.
        </p>

        {/* SISTEMA */}
        <h2 className="section-title">⚡ Sistema Eléctrico</h2>

        <div className="form-grid">

          <div className="form-group">
            <label>Sistema</label>
            <select value={system} onChange={(e) => setSystem(e.target.value)}>
              <option value="monofasico">Monofásico</option>
              <option value="trifasico">Trifásico</option>
            </select>
          </div>

          <div className="form-group">
            <label>Voltaje</label>
            <select value={voltage} onChange={(e) => setVoltage(e.target.value)}>
              <option>120</option>
              <option>208</option>
              <option>230</option>
              <option>240</option>
              <option>460</option>
              <option>480</option>
              <option>575</option>
            </select>
          </div>

        </div>

        {/* CARGA */}
        <h2 className="section-title">🏭 Carga</h2>

        <div className="form-grid">

          <div className="form-group">
            <label>Tipo</label>
            <select value={loadType} onChange={(e) => setLoadType(e.target.value)}>
              <option value="motor">Motor</option>
              <option value="lighting">Iluminación</option>
              <option value="panel">Panel</option>
            </select>
          </div>

          <div className="form-group">
            <label>Potencia</label>
            <input value={power} onChange={(e) => setPower(e.target.value)} />
          </div>

          <div className="form-group">
            <label>FP</label>
            <input value={powerFactor} onChange={(e) => setPowerFactor(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Eficiencia</label>
            <input value={efficiency} onChange={(e) => setEfficiency(e.target.value)} />
          </div>

        </div>

        {/* INSTALACIÓN */}
        <h2 className="section-title">🏗️ Instalación</h2>

        <div className="form-grid">

          <div className="form-group">
            <label>Distancia (m)</label>
            <input value={distance} onChange={(e) => setDistance(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Material</label>
            <select value={material} onChange={(e) => setMaterial(e.target.value)}>
              <option>cobre</option>
              <option>aluminio</option>
            </select>
          </div>

        </div>

        <button className="calculate-btn" onClick={calculateProtections}>
          ⚡ Calcular Protecciones
        </button>

        {result && (
          <div className="results">

            <h2 className="section-title">📊 Resultados</h2>

            <div className="results-grid">

              <div className="result-card">
                <h3>Corriente</h3>
                <p>{result.current} A</p>
              </div>

              <div className="result-card">
                <h3>Breaker</h3>
                <p>{result.breaker} A</p>
              </div>

              <div className="result-card">
                <h3>Fusible</h3>
                <p>{result.fuse} A</p>
              </div>

              <div className="result-card">
                <h3>Cable</h3>
                <p>{result.cable}</p>
              </div>

              <div className="result-card">
                <h3>Caída de tensión</h3>
                <p>{result.voltageDrop} %</p>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default ProtectionAssistant;