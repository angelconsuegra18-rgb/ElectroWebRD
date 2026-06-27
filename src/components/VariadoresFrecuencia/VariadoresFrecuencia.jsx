import { useState, useEffect } from "react";

export default function VariadoresFrecuencia() {

  const [potencia, setPotencia] = useState(0);
  const [voltaje, setVoltaje] = useState(0);
  const [eficiencia, setEficiencia] = useState(0.92);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setPulse(p => !p);
    }, 500);

    return () => clearInterval(t);
  }, []);

  // =============================
  // CÁLCULOS
  // =============================

  const potenciaKW =
    potencia > 0 ? potencia / 1000 : 0;

  const corriente =
    potencia > 0 && voltaje > 0
      ? potencia / (Math.sqrt(3) * voltaje * eficiencia)
      : 0;

  const carga =
    corriente > 0
      ? Math.min((corriente / 100) * 100, 100)
      : 0;

  // =============================
  // SELECCIÓN AUTOMÁTICA VFD
  // =============================

  const vfd =
    potenciaKW <= 0.75 ? "VFD MICRO DRIVE" :
    potenciaKW <= 1.5 ? "VFD COMPACT" :
    potenciaKW <= 3 ? "VFD STANDARD" :
    potenciaKW <= 7.5 ? "VFD INDUSTRIAL" :
    potenciaKW <= 15 ? "VFD HEAVY DUTY" :
    "VFD ULTRA POWER";

  // Corriente mínima recomendada del VFD

  const corrienteSalida =
    (corriente * 1.20).toFixed(2);

  // Tipo de control

  const control =
    potenciaKW <= 5
      ? "V/f"
      : potenciaKW <= 30
      ? "Vectorial"
      : "Vectorial + Encoder";

  // Protección

  const proteccion =
    potenciaKW <= 15
      ? "IP20"
      : "IP55";

  // EMC

  const emc =
    potenciaKW > 3
      ? "Recomendado"
      : "Opcional";

  // Reactor

  const reactor =
    potenciaKW > 15
      ? "Sí"
      : "No requerido";

  // Frecuencia

  const frecuencia = "50 / 60 Hz";

  // =============================
  // ESTADO
  // =============================

  const estado =
    corriente > 80 ? "CRÍTICO" :
    corriente > 40 ? "ALTO" :
    corriente > 15 ? "MEDIO" :
    "ESTABLE";

  const color =
    estado === "CRÍTICO"
      ? "#ff3b3b"
      : estado === "ALTO"
      ? "#ff7a18"
      : estado === "MEDIO"
      ? "#ffd500"
      : "#2cff88";

  // =============================
  // RECOMENDACIÓN IA
  // =============================

  let recomendacion = "";

  if (potenciaKW > 30) {

    recomendacion =
      "Motor de gran potencia. Utilice control vectorial con encoder, reactor de línea, filtro EMC y un variador sobredimensionado un 20 %.";

  } else if (potenciaKW > 15) {

    recomendacion =
      "Se recomienda un VFD Heavy Duty con reactor de línea, protección IP55 y filtro EMC.";

  } else if (potenciaKW > 5) {

    recomendacion =
      "Utilice control vectorial con protección térmica y rampas de aceleración entre 5 y 10 segundos.";

  } else {

    recomendacion =
      "Aplicación estándar. Un variador V/f es suficiente para bombas, ventiladores y cargas ligeras.";

  }
return (

  <div className="arranque-card">

    {/* HEADER */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        padding: "10px 0"
      }}
    >
      <h2
        style={{
          letterSpacing: 2,
          textShadow: "0 0 20px rgba(255,255,255,.2)"
        }}
      >
        ⚡ SCADA ULTRA 3D CONTROL ROOM
      </h2>

      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: color,
          boxShadow: pulse
            ? `0 0 25px ${color},0 0 40px ${color}`
            : "0 0 10px rgba(0,0,0,.3)",
          transition: ".3s"
        }}
      />
    </div>

    {/* TARJETAS */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 12,
        marginBottom: 20
      }}
    >
      {[
        ["⚡ Potencia", `${potenciaKW.toFixed(2)} kW`],
        ["🔌 Corriente", `${corriente.toFixed(2)} A`],
        ["⚙️ VFD", vfd]
      ].map((item, i) => (
        <div
          key={i}
          style={{
            background: "linear-gradient(145deg,#0f172a,#111b31)",
            padding: 18,
            borderRadius: 14,
            boxShadow: "8px 8px 20px rgba(0,0,0,.4)"
          }}
        >
          <h4 style={{ opacity: .8 }}>{item[0]}</h4>

          <p
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 18
            }}
          >
            {item[1]}
          </p>
        </div>
      ))}
    </div>

    {/* PANEL */}
    <div
      style={{
        background: "linear-gradient(145deg,#0b1220,#0f172a)",
        padding: 18,
        borderRadius: 16,
        boxShadow: "inset 0 0 20px rgba(0,0,0,.5)",
        marginBottom: 20
      }}
    >
      <h3>🖥️ PANEL DE CONFIGURACIÓN</h3>

      <input
        type="number"
        placeholder="Potencia (W)"
        onChange={(e) => setPotencia(Number(e.target.value))}
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Voltaje (V)"
        onChange={(e) => setVoltaje(Number(e.target.value))}
        style={inputStyle}
      />

      <input
        type="number"
        step="0.01"
        value={eficiencia}
        onChange={(e) => setEficiencia(Number(e.target.value))}
        placeholder="Eficiencia"
        style={inputStyle}
      />
    </div>

    {/* BARRA */}
    <div
      style={{
        height: 20,
        background: "#111b31",
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 25
      }}
    >
      <div
        style={{
          width: `${carga}%`,
          height: "100%",
          background: `linear-gradient(90deg,${color},#00f2ff)`,
          boxShadow: `0 0 20px ${color}`,
          transition: ".4s"
        }}
      />
    </div>

    {/* PANEL TÉCNICO */}
    <div
      style={{
        background: "#0b1220",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: 16,
        padding: 22
      }}
    >
      <h3
        style={{
          color: "#FFC107",
          marginBottom: 20
        }}
      >
        ⚙️ Selección Técnica del Variador
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 14
        }}
      >
        <p><b>Potencia Motor:</b> {potenciaKW.toFixed(2)} kW</p>

        <p><b>Corriente Nominal:</b> {corriente.toFixed(2)} A</p>

        <p><b>Variador:</b> {vfd}</p>

        <p><b>Salida mínima:</b> {corrienteSalida} A</p>

        <p><b>Margen recomendado:</b> 20 %</p>

        <p><b>Frecuencia:</b> {frecuencia}</p>

        <p><b>Modo de Control:</b> {control}</p>

        <p><b>Protección:</b> {proteccion}</p>

        <p><b>Filtro EMC:</b> {emc}</p>

        <p><b>Reactor de Línea:</b> {reactor}</p>
      </div>

      <div
        style={{
          marginTop: 25,
          padding: 20,
          borderRadius: 14,
          background: "rgba(34,197,94,.12)",
          border: "1px solid rgba(34,197,94,.35)"
        }}
      >
        <h4
          style={{
            color: "#22c55e",
            marginBottom: 12
          }}
        >
          🧠 Recomendación Técnica
        </h4>

        <p
          style={{
            lineHeight: 1.8,
            color: "#e2e8f0"
          }}
        >
          {recomendacion}
        </p>
      </div>

      <div
        style={{
          marginTop: 20,
          paddingTop: 15,
          borderTop: "1px solid rgba(255,255,255,.08)",
          display: "flex",
          justifyContent: "space-between",
          color: "#94a3b8"
        }}
      >
        <span>Estado: <b style={{ color }}>{estado}</b></span>

        <span>Carga: {carga.toFixed(1)}%</span>

        <span>SCADA ONLINE</span>
      </div>

    </div>

  </div>

);

}

const inputStyle = {
  width: "100%",
  marginBottom: 10,
  padding: 12,
  borderRadius: 10,
  background: "rgba(0,0,0,.3)",
  border: "1px solid rgba(255,255,255,.1)",
  color: "white",
  outline: "none",
  fontSize: 15
};