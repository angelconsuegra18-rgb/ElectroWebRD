// ==========================================
// BASE DE DATOS DEL CENTRO SOLAR
// ELECTROWEB
// ==========================================

// Paneles solares comerciales
export const solarPanels = [
  {
    id: 1,
    marca: "Jinko Solar",
    modelo: "Tiger Neo",
    potencia: 550,
    voc: 49.5,
    isc: 13.9,
    eficiencia: 21.3,
  },
  {
    id: 2,
    marca: "LONGi",
    modelo: "Hi-MO 6",
    potencia: 560,
    voc: 50.2,
    isc: 14.1,
    eficiencia: 21.7,
  },
  {
    id: 3,
    marca: "Canadian Solar",
    modelo: "HiKu7",
    potencia: 545,
    voc: 49.8,
    isc: 13.8,
    eficiencia: 21.2,
  },
  {
    id: 4,
    marca: "JA Solar",
    modelo: "DeepBlue 4.0",
    potencia: 550,
    voc: 49.7,
    isc: 13.9,
    eficiencia: 21.5,
  },
  {
    id: 5,
    marca: "Trina Solar",
    modelo: "Vertex S+",
    potencia: 570,
    voc: 50.5,
    isc: 14.3,
    eficiencia: 22.0,
  },
];

// Inversores comerciales
export const solarInverters = [
  {
    potencia: 3,
    marca: "Growatt",
    modelo: "MIN 3000TL-X",
    tipo: "On-Grid",
  },
  {
    potencia: 5,
    marca: "Growatt",
    modelo: "MOD 5000TL3-X",
    tipo: "On-Grid",
  },
  {
    potencia: 8,
    marca: "Huawei",
    modelo: "SUN2000-8KTL",
    tipo: "On-Grid",
  },
  {
    potencia: 10,
    marca: "Huawei",
    modelo: "SUN2000-10KTL",
    tipo: "On-Grid",
  },
  {
    potencia: 15,
    marca: "Solis",
    modelo: "S5-GR3P15K",
    tipo: "On-Grid",
  },
  {
    potencia: 5,
    marca: "Victron",
    modelo: "MultiPlus II",
    tipo: "Off-Grid",
  },
  {
    potencia: 8,
    marca: "Victron",
    modelo: "Quattro",
    tipo: "Off-Grid",
  },
  {
    potencia: 5,
    marca: "Deye",
    modelo: "SUN-5K-SG04",
    tipo: "Híbrido",
  },
  {
    potencia: 8,
    marca: "Deye",
    modelo: "SUN-8K-SG04",
    tipo: "Híbrido",
  },
  {
    potencia: 12,
    marca: "Deye",
    modelo: "SUN-12K-SG04",
    tipo: "Híbrido",
  },
];

// Tipos de sistemas
export const solarSystems = [
  {
    nombre: "On-Grid",
    descripcion: "Sistema conectado a la red eléctrica.",
    usaBaterias: false,
  },
  {
    nombre: "Off-Grid",
    descripcion: "Sistema aislado con banco de baterías.",
    usaBaterias: true,
  },
  {
    nombre: "Híbrido",
    descripcion: "Sistema conectado a la red con respaldo de baterías.",
    usaBaterias: true,
  },
];

// Horas solares recomendadas
export const sunHours = [
  3,
  3.5,
  4,
  4.5,
  5,
  5.5,
  6,
  6.5,
  7,
];

// Factores de seguridad
export const safetyFactors = [
  10,
  15,
  20,
  25,
  30,
];