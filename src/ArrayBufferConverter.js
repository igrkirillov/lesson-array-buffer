export default class ArrayBufferConverter {
  constructor() {
    this.twoBytesArray = undefined;
  }

  load(buffer) {
    const data = [];
    new Uint16Array(buffer).forEach(number => data.push(number));
    this.twoBytesArray = data;
  }

  toString() {
    return this.twoBytesArray.reduce((text, twoBytes) => text + String.fromCharCode(twoBytes), "");
  }
}