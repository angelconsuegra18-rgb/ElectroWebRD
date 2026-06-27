import { useState } from "react";

import OhmCalculator from "../components/OhmCalculator";
import VoltageDropCalculator from "../components/VoltageDropCalculator";
import PowerFactorCalculator from "../components/PowerFactorCalculator";
import EnergyConsumptionCalculator from "../components/EnergyConsumptionCalculator";
import AWGCalculator from "../components/AWGCalculator";
import BatteryBankCalculator from "../components/BatteryBankCalculator";
import SolarPanelCalculator from "../components/SolarPanelCalculator";
import InverterCalculator from "../components/InverterCalculator";
import ChargeControllerCalculator from "../components/ChargeControllerCalculator";

function Calculadoras() {
  const [calculadora, setCalculadora] = useState("ohm");

  return (
    <div className="calculadoras-page">
      <div className="sidebar">

        <h3>⚡ CALCULADORAS</h3>

        <button onClick={() => setCalculadora("ohm")}>
          Ley de Ohm
        </button>

        <button onClick={() => setCalculadora("caida")}>
          Caída de tensión
        </button>

        <button onClick={() => setCalculadora("fp")}>
          Factor de potencia
        </button>

        <button onClick={() => setCalculadora("energy")}>
          Consumo kWh
        </button>

        <button onClick={() => setCalculadora("awg")}>
          Cable AWG
        </button>

        <button onClick={() => setCalculadora("battery")}>
          Banco de baterías
        </button>

        <button onClick={() => setCalculadora("solar")}>
          Paneles solares
        </button>

        <button onClick={() => setCalculadora("inverter")}>
          Selección de Inversor
        </button>

        <button onClick={() => setCalculadora("controller")}>
          Controlador de Carga
        </button>

      </div>

      <div className="contenido">

        {calculadora === "ohm" && <OhmCalculator />}

        {calculadora === "caida" && <VoltageDropCalculator />}

        {calculadora === "fp" && <PowerFactorCalculator />}

        {calculadora === "energy" && <EnergyConsumptionCalculator />}

        {calculadora === "awg" && <AWGCalculator />}

        {calculadora === "battery" && <BatteryBankCalculator />}

        {calculadora === "solar" && <SolarPanelCalculator />}

        {calculadora === "inverter" && <InverterCalculator />}

        {calculadora === "controller" && (
          <ChargeControllerCalculator />
        )}

      </div>
    </div>
  );
}

export default Calculadoras;