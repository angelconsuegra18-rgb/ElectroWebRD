import { jsPDF } from "jspdf";
import QRCode from "qrcode";

import PdfHeader from "./PdfHeader";
import PdfGeneralData from "./PdfGeneralData";
import PdfCalculations from "./PdfCalculations";
import PdfRecommendations from "./PdfRecommendations";

async function MotorPdf(motor) {
  if (!motor) return;

  const doc = new jsPDF("p", "mm", "a4");

  const reportId = "EW-" + Date.now().toString().slice(-6);

  // LOGO
  const logo = new Image();
  logo.src = "/electroweb-logo.png";

  await new Promise((resolve) => {
    logo.onload = resolve;
  });

  // HEADER PDF
  PdfHeader(doc, reportId);

  doc.addImage(logo, "PNG", 8, 3, 70, 28);

  // CONTENIDO
  PdfGeneralData(doc, motor);
  PdfCalculations(doc, motor);
  PdfRecommendations(doc, motor);

  // QR
  let qrDataUrl = "";

  try {
    qrDataUrl = await QRCode.toDataURL(
      "https://instagram.com/electroweb"
    );
  } catch (err) {}

  // FOOTER
  doc.setDrawColor(255, 193, 7);
  doc.line(12, 284, 198, 284);

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");

  doc.setTextColor(90);
  doc.text("Instagram: @electroweb", 12, 288);
  doc.text("Correo: miguelagc1803@gmail.com", 12, 292);
  doc.text("Tel: +1 829-676-5516", 12, 296);

  doc.setTextColor(120);
  doc.text(
    "Documento generado automáticamente por ElectroWeb",
    105,
    292,
    { align: "center" }
  );

  doc.setTextColor(90);
  doc.text("República Dominicana", 150, 292);
  doc.text("Santo Domingo", 150, 296);

  if (qrDataUrl) {
    doc.addImage(qrDataUrl, "PNG", 175, 268, 18, 18);
  }

  doc.save(`Motor_${motor.hp}HP.pdf`);
}

export default MotorPdf;