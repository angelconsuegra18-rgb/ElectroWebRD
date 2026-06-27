import { getMotorRecommendations } from "../utils/motorRecommendations";

function Recommendation({ icon, title, value, description }) {

  return (

    <div
      style={{
        background:"#0f172a",
        border:"1px solid rgba(255,255,255,.08)",
        borderRadius:"18px",
        padding:"25px",
        textAlign:"center",
        color:"#fff",
        transition:"0.3s"
      }}
    >

      <div
        style={{
          width:"70px",
          height:"70px",
          margin:"0 auto 18px",
          borderRadius:"18px",
          background:"rgba(59,130,246,.12)",
          border:"1px solid rgba(59,130,246,.25)",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          fontSize:"38px"
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color:"#94a3b8",
          fontSize:"17px",
          marginBottom:"12px"
        }}
      >
        {title}
      </h3>

      <h2
        style={{
          color:"#ffffff",
          fontSize:"32px",
          marginBottom:"12px"
        }}
      >
        {value}
      </h2>

      <p
        style={{
          color:"#bfc7d8",
          lineHeight:"1.6"
        }}
      >
        {description}
      </p>

    </div>

  );

}

function MotorRecommendationCard({ motor }) {

  if (!motor) return null;

  const rec = getMotorRecommendations(motor.current);

  return (

    <div
      style={{
        background:"#18233a",
        border:"1px solid rgba(255,255,255,.08)",
        borderRadius:"20px",
        padding:"30px"
      }}
    >

      <h2
        style={{
          color:"#FFC107",
          fontSize:"32px",
          marginBottom:"30px"
        }}
      >
        🛠 Recomendaciones de Ingeniería
      </h2>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
          gap:"22px"
        }}
      >

        <Recommendation
          icon="🧵"
          title="Cable"
          value={rec.cable}
          description="Calibre recomendado según la corriente nominal del motor."
        />

        <Recommendation
          icon="🛡️"
          title="Breaker"
          value={`${rec.breaker} A`}
          description="Protección calculada al 125% de la corriente nominal."
        />

        <Recommendation
          icon="⚙️"
          title="Contactor"
          value={`${rec.contactor} A`}
          description="Capacidad mínima recomendada para maniobra."
        />

        <Recommendation
          icon="🌡️"
          title="Relé Térmico"
          value={rec.overload}
          description="Rango sugerido para proteger el motor contra sobrecargas."
        />

      </div>

    </div>

  );

}

export default MotorRecommendationCard;