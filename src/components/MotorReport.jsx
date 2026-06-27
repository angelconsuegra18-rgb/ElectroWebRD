import ReportLayout from "../reports/ReportLayout";
import ReportTable from "../reports/ReportTable";

// 🔥 IMPORT CORRECTO (default export seguro)
import MotorPdf from "../reports/MotorPDF/MotorPdf";

function MotorReport({ motor }) {
  if (!motor) return null;

  const data = [
    { label: "Potencia", value: `${motor.hp} HP` },
    { label: "Potencia Mecánica", value: `${motor.kw} kW` },
    { label: "Corriente", value: `${motor.current} A` },
    { label: "Velocidad", value: `${motor.rpm} RPM` },
    { label: "Frecuencia", value: `${motor.frequency} Hz` },
    { label: "Polos", value: motor.poles },
    { label: "Frame", value: motor.nemaFrame },
    { label: "Eficiencia", value: `${motor.efficiency}%` },
    { label: "Factor de Potencia", value: motor.pf },
    {
      label: "Torque",
      value: `${motor.torque.toFixed(2)} N·m`,
    },
  ];

  const downloadPDF = async () => {
    try {
      await MotorPdf(motor);
    } catch (error) {
      console.error("Error generando PDF:", error);
    }
  };

  return (
    <ReportLayout title="📋 Reporte Técnico del Motor">

      <ReportTable data={data} />

      <button
        onClick={downloadPDF}
        style={{
          marginTop: 30,
          width: "100%",
          padding: "15px",
          background: "#FFC107",
          color: "#16213E",
          border: "none",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        📄 Descargar PDF Profesional
      </button>

    </ReportLayout>
  );
}

export default MotorReport;