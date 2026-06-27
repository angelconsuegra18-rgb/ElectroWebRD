function SolarResults({
  resultado,
  tipoSistema,
  voltaje,
  sistemaSolar,
}) {
  if (!resultado) return null;

  return (
    <div className="solar-results">

      <div className="result-item">
        <strong>☀ Potencia Requerida</strong>
        <span>{resultado.potenciaNecesaria.toFixed(2)} kW</span>
      </div>

      <div className="result-item">
        <strong>🧩 Paneles Requeridos</strong>
        <span>{resultado.paneles}</span>
      </div>

      <div className="result-item">
        <strong>⚡ Inversor Recomendado</strong>
        <span>
          {resultado.inversor.marca} {resultado.inversor.modelo}
          <br />
          {resultado.inversor.potencia} kW
        </span>
      </div>

      {sistemaSolar !== "On-Grid" && (
        <div className="result-item">
          <strong>🔋 Banco de Baterías</strong>
          <span>{resultado.baterias} baterías de 48V / 100Ah</span>
        </div>
      )}

      <div className="result-item">
        <strong>🎛 Controlador MPPT</strong>
        <span>{resultado.mppt} kW</span>
      </div>

      <div className="result-item">
        <strong>🏠 Tipo de Instalación</strong>
        <span>{tipoSistema}</span>
      </div>

      <div className="result-item">
        <strong>🔌 Tipo de Sistema</strong>
        <span>{sistemaSolar}</span>
      </div>

      <div className="result-item">
        <strong>⚙ Voltaje</strong>
        <span>{voltaje} V</span>
      </div>

    </div>
  );
}

export default SolarResults;