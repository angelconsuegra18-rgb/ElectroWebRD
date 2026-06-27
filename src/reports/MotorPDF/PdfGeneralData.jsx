function PdfGeneralData(doc, motor) {

  // =====================================
  // TITULO
  // =====================================

  doc.setFillColor(22,33,62);
  doc.roundedRect(12,47,186,12,3,3,"F");

  doc.setFont("helvetica","bold");
  doc.setFontSize(16);
  doc.setTextColor(255,255,255);

  doc.text(
    "DATOS GENERALES DEL MOTOR",
    18,
    55
  );

  // =====================================
  // TARJETA
  // =====================================

  doc.setFillColor(248,249,251);
  doc.setDrawColor(215,220,228);

  doc.roundedRect(
    12,
    62,
    186,
    72,
    4,
    4,
    "FD"
  );

  // Línea central

  doc.setDrawColor(225);

  doc.line(
    105,
    68,
    105,
    128
  );

  const left = 20;
  const right = 112;

  let y = 74;

  doc.setFontSize(11);

  const row = (label,value,x,yy)=>{

    doc.setFont("helvetica","bold");
    doc.setTextColor(20);

    doc.text(label,x,yy);

    doc.setFont("helvetica","normal");
    doc.setTextColor(70);

    doc.text(
      String(value),
      x+42,
      yy
    );

  };

  row("Potencia",`${motor.hp} HP`,left,y);
  row("Potencia",`${motor.kw} kW`,right,y);

  y+=10;

  row("Voltaje","460 V",left,y);
  row("Corriente",`${motor.current} A`,right,y);

  y+=10;

  row("RPM",`${motor.rpm}`,left,y);
  row("Frecuencia",`${motor.frequency} Hz`,right,y);

  y+=10;

  row("Polos",motor.poles,left,y);
  row("Frame",motor.nemaFrame,right,y);

  y+=10;

  row("Eficiencia",`${motor.efficiency}%`,left,y);
  row("Factor P.",motor.pf,right,y);

  y+=10;

  row("Torque",`${motor.torque.toFixed(2)} N·m`,left,y);
  row("Aislamiento",motor.insulation,right,y);

}

export default PdfGeneralData;