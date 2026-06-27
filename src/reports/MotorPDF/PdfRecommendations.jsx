function PdfRecommendations(doc, motor) {

  const startY = 225;

  // =====================================
  // TÍTULO
  // =====================================

  doc.setFillColor(22, 33, 62);
  doc.roundedRect(12, startY, 186, 10, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);

  doc.text(
    "RECOMENDACIONES TÉCNICAS",
    18,
    startY + 7
  );

  // =====================================
  // TARJETA
  // =====================================

  doc.setFillColor(248, 249, 251);
  doc.setDrawColor(215, 220, 228);

  doc.roundedRect(
    12,
    startY + 12,
    186,
    34,
    4,
    4,
    "FD"
  );

  // =====================================
  // CÁLCULOS
  // =====================================

  const breaker = Math.ceil(motor.current * 2.5);
  const contactor = Math.ceil(motor.current * 1.25);

  const thermal =
    `${Math.round(motor.current * 0.9)} - ${Math.round(motor.current * 1.1)} A`;

  let cable = "14 AWG";

  if (motor.current > 15) cable = "12 AWG";
  if (motor.current > 20) cable = "10 AWG";
  if (motor.current > 30) cable = "8 AWG";
  if (motor.current > 50) cable = "6 AWG";
  if (motor.current > 65) cable = "4 AWG";
  if (motor.current > 85) cable = "3 AWG";
  if (motor.current > 100) cable = "2 AWG";

  const items = [
    ["Breaker recomendado", `${breaker} A`],
    ["Contactor mínimo", `${contactor} A`],
    ["Relé térmico", thermal],
    ["Calibre del conductor", cable],
    [
      "Tipo de arranque",
      motor.hp <= 10
        ? "Directo (DOL)"
        : "Estrella - Triángulo"
    ],
  ];

  let y = startY + 18;

  items.forEach((item) => {

    // Indicador

    doc.setFillColor(34, 197, 94);
    doc.circle(20, y - 1.5, 1.8, "F");

    // Etiqueta

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(22, 33, 62);

    doc.text(
      item[0],
      28,
      y
    );

    // Valor

    doc.setFont("helvetica", "normal");
    doc.setTextColor(70);

    doc.text(
      String(item[1]),
      120,
      y
    );

    y += 6;

  });

}

export default PdfRecommendations;