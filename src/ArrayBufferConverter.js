export default class ArrayBufferConverter {
  constructor() {
    this.twoBytesArray = undefined;
  }

  load(buffer) {
    const data = [];
    const bufferView = new Uint16Array(buffer);
    bufferView.forEach(number => data.push(number));
    this.twoBytesArray = data;
  }

  toString() {
    return this.twoBytesArray.reduce((text, twoBytes) => text + String.fromCharCode(twoBytes), "");
  }
}