import { useState } from "react";
import "./OhmCalculator.css";

function EnergyConsumptionCalculator() {
  const [power, setPower] = useState("");
  const [hours, setHours] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [results, setResults] = useState(null);

  const calculate = () => {
    if (power === "" || hours === "" || quantity === "") {
      alert("Complete todos los campos obligatorios.");
      return;
    }

    const p = Number(power);
    const h = Number(hours);
    const q = Number(quantity);
    const pr = Number(price);

    const daily = (p * h * q) / 1000;
    const monthly = daily * 30;
    const yearly = daily * 365;
    const cost = price !== "" ? monthly * pr : null;

    setResults({
      daily,
      monthly,
      yearly,
      cost,
    });
  };

  return (
    <section className="ohm-page">

      <h1 className="page-title">
        ⚡ Consumo de Energía (kWh)
      </h1>

      <div className="ohm-card">

        <div className="form-grid">

          <div className="campo">
            <label>Potencia (W)</label>

            <input
              type="number"
              placeholder="Ej: 1500"
              value={power}
              onChange={(e) => setPower(e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Horas por día</label>

            <input
              type="number"
              placeholder="Ej: 8"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Cantidad de equipos</label>

            <input
              type="number"
              placeholder="Ej: 3"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Precio del kWh (Opcional)</label>

            <input
              type="number"
              placeholder="Ej: 12.50"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="campo boton-calcular">
            <button onClick={calculate}>
              ⚡ Calcular
            </button>
          </div>

        </div>

        {results && (

          <div className="resultado-card">

            <h3>Resultados</h3>

            <div className="info-content">

              <p>
                <strong>Consumo diario:</strong>{" "}
                {results.daily.toFixed(2)} kWh
              </p>

              <p>
                <strong>Consumo mensual:</strong>{" "}
                {results.monthly.toFixed(2)} kWh
              </p>

              <p>
                <strong>Consumo anual:</strong>{" "}
                {results.yearly.toFixed(2)} kWh
              </p>

              {results.cost !== null && (
                <p>
                  <strong>Costo mensual:</strong> RD$ {results.cost.toFixed(2)}
                </p>
              )}

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default EnergyConsumptionCalculator;