import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a Number');
    } else if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a Number');
    } else if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a Number');
    }
    return amount * conversionRate;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('amount must be a Number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = newCurrency;
  }
}
