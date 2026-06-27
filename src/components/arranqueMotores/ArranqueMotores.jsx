import { useState } from "react";
import "./arranqueMotores.css";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ArranqueMotores() {

  const [potencia, setPotencia] = useState(0);
  const [voltaje, setVoltaje] = useState(0);
  const [cosfi, setCosfi] = useState(0.85);
  const [metodo, setMetodo] = useState("directo");

  // 🔌 SEGURIDAD DE CÁLCULO
  const inNominal =
    potencia > 0 && voltaje > 0
      ? potencia / (Math.sqrt(3) * voltaje * cosfi)
      : 0;

  // ⚡ MÉTODOS
  const iDirecto = inNominal * 7;
  const iEstrella = inNominal * 2.5;

  const iArranque =
    metodo === "directo" ? iDirecto : iEstrella;

  // 🔴 RIESGO INDUSTRIAL
  const riesgo =
    iArranque > 150 ? "CRÍTICO" :
    iArranque > 80 ? "ALTO" :
    iArranque > 40 ? "MEDIO" :
    "BAJO";

  // ⚙️ CONTACTOR
  const contactor =
    iArranque < 25 ? "AC-3 25A" :
    iArranque < 50 ? "AC-3 50A" :
    iArranque < 100 ? "AC-3 100A" :
    "HEAVY INDUSTRIAL";

  // 🔌 BREAKER
  const breaker =
    inNominal > 0 ? Math.ceil(inNominal * 1.25) : 0;

  // 🧠 IA INDUSTRIAL FINAL
  const ia =
    iArranque > 150
      ? "🚨 CRÍTICO: Sistema requiere estrella-triángulo + protecciones reforzadas + revisión de red"
      : iArranque > 80
        ? "⚠️ ALTO: Reducir corriente de arranque con estrella-triángulo"
        : "✔ ESTABLE: Operación segura en arranque directo";

  // 📊 SCADA LOAD
  const porcentaje =
    iArranque > 0
      ? Math.min((iArranque / 180) * 100, 100)
      : 0;

  // 🕒 SCADA TIME REAL
  const tiempoReal = new Date().toLocaleTimeString();

  // 📊 CURVA INDUSTRIAL
  const labels = ["0s", "0.2s", "0.5s", "1s", "2s", "3s"];

  const data = {
    labels,
    datasets: [
      {
        label: "Corriente de Arranque (A)",
        data: [
          iArranque,
          iArranque * 0.9,
          iArranque * 0.7,
          iArranque * 0.5,
          iArranque * 0.25,
          iArranque * 0.1
        ],
        borderColor: "#FFC107",
        backgroundColor: "rgba(255,193,7,0.15)",
        tension: 0.4
      }
    ]
  };

  // 🚨 ALARMA SCADA
  const alarma =
    riesgo === "CRÍTICO"
      ? "🚨 ALARMA CRÍTICA: Paro inmediato recomendado"
      : riesgo === "ALTO"
        ? "⚠️ Advertencia: Alta carga detectada"
        : "🟢 Sistema estable";

  return (
    <div className="arranque-card">

      <h2>🚀 SCADA FINAL PRO - PLANTA INDUSTRIAL</h2>

      {/* PANEL SCADA */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "12px",
        marginBottom: "20px"
      }}>

        <div className="scada-box">
          <h4>🔵 Estado</h4>
          <p style={{
            color:
              riesgo === "CRÍTICO" ? "#ef4444" :
              riesgo === "ALTO" ? "#ff6b6b" :
              riesgo === "MEDIO" ? "#FFC107" :
              "#22c55e"
          }}>
            {riesgo}
          </p>
        </div>

        <div className="scada-box">
          <h4>⚡ Carga</h4>
          <p style={{ color: "#FFC107" }}>
            {porcentaje.toFixed(1)}%
          </p>
        </div>

        <div className="scada-box">
          <h4>🔌 Protección</h4>
          <p style={{ color: "#60a5fa" }}>
            {contactor}
          </p>
        </div>

      </div>

      {/* INPUTS */}
      <div className="arranque-inputs">

        <input
          type="number"
          placeholder="Potencia (W)"
          onChange={(e) => setPotencia(Number(e.target.value))}
        />

        <input
          type="number"
          placeholder="Voltaje (V)"
          onChange={(e) => setVoltaje(Number(e.target.value))}
        />

        <input
          type="number"
          step="0.01"
          placeholder="Cos φ"
          value={cosfi}
          onChange={(e) => setCosfi(Number(e.target.value))}
        />

      </div>

      {/* SELECTOR */}
      <h3>⚙️ Método de arranque</h3>

      <div className="arranque-buttons">

        <button
          onClick={() => setMetodo("directo")}
          className={`arranque-btn ${metodo === "directo" ? "active" : ""}`}
        >
          Directo
        </button>

        <button
          onClick={() => setMetodo("estrella")}
          className={`arranque-btn ${metodo === "estrella" ? "active" : ""}`}
        >
          Estrella-Triángulo
        </button>

      </div>

      {/* ALARMA SCADA */}
      <div style={{
        marginTop: 15,
        padding: "12px",
        borderRadius: "10px",
        background:
          riesgo === "CRÍTICO" ? "#7f1d1d" :
          riesgo === "ALTO" ? "#78350f" :
          "#14532d",
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
      }}>
        {alarma}
      </div>

      {/* RESULTADOS */}
      <div className="arranque-resultados">

        <h3>📊 MONITOREO SCADA</h3>

        <p>Corriente nominal: {inNominal.toFixed(2)} A</p>
        <p>Corriente arranque: {iArranque.toFixed(2)} A</p>
        <p>Breaker: {breaker} A</p>

        {/* GRÁFICO */}
        <div style={{ marginTop: 25 }}>
          <h3>📊 Curva SCADA Industrial</h3>

          <Line data={data} />
        </div>

        <p style={{ marginTop: 10, textAlign: "center" }}>
          🕒 Tiempo SCADA: {tiempoReal}
        </p>

      </div>

    </div>
  );
}