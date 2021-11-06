export default class PortModel {
  #number: number;
  #hasGift: boolean;
  #selected: boolean;
  #open: boolean;

  constructor(number: number, hasGift = false, selected = false, open = false) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#selected = selected;
    this.#open = open;
  }

  get number() {
    return this.#number;
  }
  get hasGift() {
    return this.#hasGift;
  }
  get selected() {
    return this.#selected;
  }
  get open() {
    return this.#open;
  }

  get closed() {
    return !this.#open;
  }

  markOff() {
    const selected = false;
    return new PortModel(this.number, this.hasGift, selected, this.open);
  }

  alterSelect() {
    const selected = !this.selected;
    return new PortModel(this.number, this.hasGift, selected, this.open);
  }

  openPort() {
    const open = true;
    return new PortModel(this.number, this.hasGift, this.selected, open);
  }
}