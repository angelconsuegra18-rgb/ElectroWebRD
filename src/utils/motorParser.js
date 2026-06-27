export function parseMotorText(text) {

  const data = {};

  const hp = text.match(/(\d+(\.\d+)?)\s*hp/i);

  if (hp) {
    data.hp = Number(hp[1]);
  }

  const kw = text.match(/(\d+(\.\d+)?)\s*kw/i);

  if (kw) {
    data.kw = Number(kw[1]);
  }

  const amps = text.match(/(\d+(\.\d+)?)\s*(a|amp|amps|amperes)/i);

  if (amps) {
    data.current = Number(amps[1]);
  }

  const voltage = text.match(/(120|208|220|230|240|380|400|440|460|480|575)\s*v/i);

  if (voltage) {
    data.voltage = Number(voltage[1]);
  }

  return data;
}