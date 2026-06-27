import { useMemo, useState } from "react";

import {
  solarPanels,
  solarInverters,
  solarSystems,
} from "./solarData";

import SolarResults from "./SolarResults";
import SolarRecommendations from "./SolarRecommendations";

function SolarCalculator() {

  const [tipoInstalacion, setTipoInstalacion] = useState("Residencial");

  const [sistemaSolar, setSistemaSolar] = useState("On-Grid");

  const [voltaje, setVoltaje] = useState(220);

  const [consumo, setConsumo] = useState("");

  const [horasSolar, setHorasSolar] = useState(5);

  const [seguridad, setSeguridad] = useState(20);

  const [panelSeleccionado, setPanelSeleccionado] = useState(0);

  const panel = solarPanels[panelSeleccionado];

  const resultado = useMemo(() => {

    const consumoDia = Number(consumo);

    if (!consumoDia || consumoDia <= 0)
      return null;

    const potenciaNecesaria =
      (consumoDia / Number(horasSolar)) *
      (1 + Number(seguridad) / 100);

    const paneles = Math.ceil(
      (potenciaNecesaria * 1000) /
      panel.potencia
    );

    const potenciaInversor =
      potenciaNecesaria * 1.25;

    const inversor =
      solarInverters.find(
        (i) =>
          i.tipo === sistemaSolar &&
          i.potencia >= potenciaInversor
      ) ||
      solarInverters
        .filter((i) => i.tipo === sistemaSolar)
        .slice(-1)[0];

    const baterias =
      sistemaSolar === "On-Grid"
        ? 0
        : Math.ceil(
            (consumoDia * 1000) /
              4800
          );

    const mppt = Math.ceil(
      (paneles * panel.potencia) / 1000
    );

    return {

      potenciaNecesaria,

      paneles,

      baterias,

      mppt,

      panel,

      inversor,

      potenciaInversor,

    };

  }, [

    consumo,

    horasSolar,

    seguridad,

    panel,

    sistemaSolar,

  ]);

  return (    <div className="solar-calculator">

      <h2>☀ Diseño Fotovoltaico Profesional</h2>

      <div className="solar-form">

        <div className="form-group">
          <label>Tipo de Instalación</label>

          <select
            value={tipoInstalacion}
            onChange={(e) =>
              setTipoInstalacion(e.target.value)
            }
          >
            <option>Residencial</option>
            <option>Comercial</option>
            <option>Industrial</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tipo de Sistema</label>

          <select
            value={sistemaSolar}
            onChange={(e) =>
              setSistemaSolar(e.target.value)
            }
          >
            {solarSystems.map((sistema) => (
              <option
                key={sistema.nombre}
                value={sistema.nombre}
              >
                {sistema.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Voltaje del Sistema</label>

          <select
            value={voltaje}
            onChange={(e) =>
              setVoltaje(Number(e.target.value))
            }
          >
            <option value={120}>120 V</option>
            <option value={208}>208 V</option>
            <option value={220}>220 V</option>
            <option value={240}>240 V</option>
            <option value={480}>480 V</option>
          </select>
        </div>

        <div className="form-group">
          <label>Panel Solar</label>

          <select
            value={panelSeleccionado}
            onChange={(e) =>
              setPanelSeleccionado(
                Number(e.target.value)
              )
            }
          >
            {solarPanels.map((panel, index) => (
              <option
                key={panel.id}
                value={index}
              >
                {panel.marca} {panel.modelo} ({panel.potencia} W)
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Consumo Diario (kWh)</label>

          <input
            type="number"
            value={consumo}
            onChange={(e) =>
              setConsumo(e.target.value)
            }
            placeholder="Ejemplo: 25"
          />
        </div>

        <div className="form-group">
          <label>Horas Solares Pico</label>

          <input
            type="number"
            value={horasSolar}
            onChange={(e) =>
              setHorasSolar(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Factor de Seguridad (%)</label>

          <input
            type="number"
            value={seguridad}
            onChange={(e) =>
              setSeguridad(e.target.value)
            }
          />
        </div>

      </div>

      {resultado && (      
        <>

          <SolarResults
            resultado={resultado}
            tipoSistema={tipoInstalacion}
            sistemaSolar={sistemaSolar}
            voltaje={voltaje}
          />

          <SolarRecommendations
            resultado={resultado}
            sistemaSolar={sistemaSolar}
            tipoSistema={tipoInstalacion}
          />

          <div className="solar-panel">

            <h2>Equipos Seleccionados</h2>

            <div className="solar-results">

              <div className="result-item">
                <strong>☀ Panel Seleccionado</strong>
                <span>
                  {resultado.panel.marca}
                  <br />
                  {resultado.panel.modelo}
                  <br />
                  {resultado.panel.potencia} W
                </span>
              </div>

              <div className="result-item">
                <strong>⚡ Inversor Recomendado</strong>
                <span>
                  {resultado.inversor.marca}
                  <br />
                  {resultado.inversor.modelo}
                  <br />
                  {resultado.inversor.potencia} kW
                </span>
              </div>

              <div className="result-item">
                <strong>📈 Eficiencia del Panel</strong>
                <span>
                  {resultado.panel.eficiencia} %
                </span>
              </div>

              <div className="result-item">
                <strong>🔋 Tipo de Sistema</strong>
                <span>
                  {sistemaSolar}
                </span>
              </div>

            </div>

          </div>

        </>
      )}

    </div>
  );
}

export default SolarCalculator;