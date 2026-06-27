function SolarRecommendations({
  resultado,
  sistemaSolar,
  tipoSistema,
}) {
  if (!resultado) return null;

  const recomendaciones = [];

  // Tipo de sistema
  if (sistemaSolar === "On-Grid") {
    recomendaciones.push(
      "Sistema conectado a la red. No requiere banco de baterías para su funcionamiento normal."
    );

    recomendaciones.push(
      "Se recomienda instalar protección contra sobretensiones (SPD) en el lado DC y AC."
    );

    recomendaciones.push(
      "Verifique que la empresa distribuidora permita la conexión del sistema."
    );
  }

  if (sistemaSolar === "Off-Grid") {
    recomendaciones.push(
      "Dimensione correctamente el banco de baterías para garantizar la autonomía requerida."
    );

    recomendaciones.push(
      "Utilice un inversor de onda senoidal pura."
    );

    recomendaciones.push(
      "Instale protecciones DC entre paneles, controlador e inversor."
    );
  }

  if (sistemaSolar === "Híbrido") {
    recomendaciones.push(
      "El sistema híbrido permite respaldo mediante baterías durante cortes eléctricos."
    );

    recomendaciones.push(
      "Configure correctamente las prioridades entre red, baterías y energía solar."
    );

    recomendaciones.push(
      "Verifique la compatibilidad entre el inversor híbrido y el banco de baterías."
    );
  }

  // Potencia instalada
  if (resultado.potenciaNecesaria > 10) {
    recomendaciones.push(
      "Para sistemas superiores a 10 kW se recomienda realizar un estudio detallado de la instalación y de la estructura de soporte."
    );
  }

  // Cantidad de paneles
  if (resultado.paneles >= 20) {
    recomendaciones.push(
      "Considere dividir el arreglo fotovoltaico en múltiples strings para mejorar el rendimiento y facilitar el mantenimiento."
    );
  }

  // Tipo de proyecto
  if (tipoSistema === "Industrial") {
    recomendaciones.push(
      "En instalaciones industriales se recomienda incluir monitoreo remoto y análisis de calidad de energía."
    );
  }

  if (tipoSistema === "Comercial") {
    recomendaciones.push(
      "Evalúe los perfiles de consumo durante las horas de mayor radiación para maximizar el autoconsumo."
    );
  }

  if (tipoSistema === "Residencial") {
    recomendaciones.push(
      "Considere dejar capacidad disponible para futuras ampliaciones del sistema."
    );
  }

  return (
    <div className="solar-panel">

      <h2>📋 Recomendaciones Técnicas</h2>

      <ul>
        {recomendaciones.map((item, index) => (
          <li key={index}>
            ✔ {item}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default SolarRecommendations;