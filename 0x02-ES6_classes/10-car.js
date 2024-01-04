export default class Car {
  constructor(brand = null, motor = null, color = null) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const newCar = new Car();
    const keys = Object.keys(this);
    for (const key of keys) {
      newCar[key] = this[key];
    }
    return newCar;
  }
}
