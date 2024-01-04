/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand = null, motor = null, color = null, range = null) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new Car();
  }
}
