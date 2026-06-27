import { motors } from "../data/motors";

export function findMotor(data) {

  if (data.hp) {

    return motors.find(
      motor => motor.hp === Number(data.hp)
    );

  }

  if (data.kw) {

    return motors.find(
      motor =>
        Math.abs(motor.kw - Number(data.kw)) < 0.5
    );

  }

  if (data.current && data.voltage) {

    const voltage = String(data.voltage);

    return motors.find(motor => {

      const current =
        motor.currents[voltage];

      if (!current) return false;

      return Math.abs(
        current - Number(data.current)
      ) <= 2;

    });

  }

  return null;

}