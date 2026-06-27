const cableTable = [
  { awg: "14", amps: 15 },
  { awg: "12", amps: 20 },
  { awg: "10", amps: 30 },
  { awg: "8", amps: 40 },
  { awg: "6", amps: 55 },
  { awg: "4", amps: 70 },
  { awg: "2", amps: 95 },
  { awg: "1", amps: 110 },
  { awg: "1/0", amps: 125 },
  { awg: "2/0", amps: 145 },
  { awg: "3/0", amps: 165 },
  { awg: "4/0", amps: 195 },
];

export function getMotorRecommendations(current) {

  const breaker =
    Math.ceil(current * 1.25);

  const contactor =
    Math.ceil(current);

  const overloadMin =
    Math.floor(current * 0.9);

  const overloadMax =
    Math.ceil(current * 1.1);

  const cable =
    cableTable.find(
      item => item.amps >= current
    );

  return {

    breaker,

    contactor,

    overload:
      `${overloadMin}-${overloadMax} A`,

    cable:
      cable ? `AWG ${cable.awg}` : "Consultar",

  };

}