function MotorInfoCard({ motor }) {

  if (!motor) return null;

  return (

    <div
      style={{
        background:"#18233a",
        border:"1px solid rgba(255,255,255,.08)",
        borderRadius:"20px",
        padding:"30px",
        color:"#fff"
      }}
    >

      <h2
        style={{
          fontSize:"32px",
          color:"#FFC107",
          marginBottom:"30px"
        }}
      >
        ⚡ Motor Encontrado
      </h2>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"20px"
        }}
      >

        <Card title="Potencia" value={`${motor.hp} HP`} />
        <Card title="Potencia Mecánica" value={`${motor.kw} kW`} />
        <Card title="Corriente" value={`${motor.current} A`} />
        <Card title="Velocidad" value={`${motor.rpm} RPM`} />
        <Card title="Frecuencia" value={`${motor.frequency} Hz`} />
        <Card title="Polos" value={motor.poles} />
        <Card title="Factor de Potencia" value={motor.pf} />
        <Card title="Eficiencia" value={`${motor.efficiency}%`} />
        <Card title="Frame NEMA" value={motor.nemaFrame} />
        <Card title="Aislamiento" value={motor.insulation} />
        <Card title="Factor de Servicio" value={motor.serviceFactor} />
        <Card title="Torque" value={`${motor.torque.toFixed(2)} N·m`} />

      </div>

    </div>

  );

}

function Card({ title, value }) {

  return (

    <div
      style={{
        background:"#0f172a",
        border:"1px solid rgba(255,255,255,.08)",
        borderRadius:"16px",
        padding:"22px",
        transition:"0.3s"
      }}
    >

      <div
        style={{
          color:"#94a3b8",
          fontSize:"14px",
          marginBottom:"12px",
          fontWeight:"600"
        }}
      >
        {title}
      </div>

      <div
        style={{
          color:"#ffffff",
          fontSize:"28px",
          fontWeight:"700"
        }}
      >
        {value}
      </div>

    </div>

  );

}

export default MotorInfoCard;