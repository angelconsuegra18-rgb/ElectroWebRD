function PdfCalculations(doc, motor) {

  const startY = 140;

  // =====================================
  // TÍTULO
  // =====================================

  doc.setFillColor(22, 33, 62);
  doc.roundedRect(12, startY, 186, 10, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(255,255,255);

  doc.text(
    "CÁLCULOS Y ESPECIFICACIONES",
    18,
    startY + 7
  );

  // =====================================
  // TABLA
  // =====================================

  const rows = [
    ["Potencia", `${motor.hp} HP`],
    ["Potencia Mecánica", `${motor.kw} kW`],
    ["Corriente", `${motor.current} A`],
    ["Velocidad", `${motor.rpm} RPM`],
    ["Frecuencia", `${motor.frequency} Hz`],
    ["Polos", `${motor.poles}`],
    ["Frame", motor.nemaFrame],
    ["Factor de Potencia", motor.pf],
    ["Eficiencia", `${motor.efficiency}%`],
    ["Torque", `${motor.torque.toFixed(2)} N·m`],
  ];

  let y = startY + 16;

  rows.forEach((row, index) => {

    doc.setFillColor(
      index % 2 === 0 ? 248 : 255,
      index % 2 === 0 ? 249 : 255,
      index % 2 === 0 ? 251 : 255
    );

    doc.setDrawColor(225,228,235);

    doc.roundedRect(
      12,
      y - 4,
      186,
      7,
      1,
      1,
      "FD"
    );

    doc.setFont("helvetica","bold");
    doc.setFontSize(10);
    doc.setTextColor(22,33,62);
    doc.text(row[0],18,y);

    doc.setFont("helvetica","normal");
    doc.setTextColor(70);
    doc.text(String(row[1]),122,y);

    y += 7;

  });

}

export default PdfCalculations;