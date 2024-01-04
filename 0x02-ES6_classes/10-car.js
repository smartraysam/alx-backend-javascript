export default class Car {
  constructor(brand = null, motor = null, color = null) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    this._brand = brand;
  }

  get motor() {
    return this._motor;
  }

  set motor(motor) {
    this._motor = motor;
  }

  get color() {
    return this._color;
  }

  set color(color) {
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
