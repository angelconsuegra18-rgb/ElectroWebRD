import { useState } from "react";

function MotorPlateReader() {
  const [image, setImage] = useState(null);

  return (
    <div className="calculator">

      <h2>📷 Analizador de Placa del Motor</h2>

      <p
        style={{
          color: "#ccc",
          marginBottom: 20,
        }}
      >
        Sube una fotografía de la placa del motor y ElectroWeb te ayudará a identificar sus datos técnicos.
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files.length > 0) {
            setImage(URL.createObjectURL(e.target.files[0]));
          }
        }}
      />

      {image && (
        <div
          style={{
            marginTop: 20,
            textAlign: "center",
          }}
        >
          <img
            src={image}
            alt="Placa del motor"
            style={{
              maxWidth: "100%",
              borderRadius: 10,
              border: "2px solid #444",
            }}
          />

          <p
            style={{
              marginTop: 15,
              color: "#FFD54F",
            }}
          >
            ✔ Imagen cargada correctamente.
          </p>

          <button
            style={{
              marginTop: 15,
            }}
          >
            Analizar placa
          </button>
        </div>
      )}
    </div>
  );
}

export default MotorPlateReader;