function PdfHeader(doc, reportId) {
  // Fondo superior
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, 210, 40, "F");

  // Línea amarilla
  doc.setFillColor(255, 193, 7);
  doc.rect(0, 39, 210, 1.8, "F");

  // Título
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);

  doc.text("REPORTE TÉCNICO", 135, 15);
  doc.text("DEL MOTOR", 135, 25);

  // ID
  doc.setFontSize(12);
  doc.setTextColor(255, 193, 7);
  doc.text("ID: " + reportId, 135, 35);
}

export default PdfHeader;