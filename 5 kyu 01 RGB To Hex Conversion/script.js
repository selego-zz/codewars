"use strict";

/*
RGB To Hex Conversion
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"

*/


function rgb(r, g, b) {
  let arr = [r, g, b];
  arr.forEach((color, index) => {
    arr[index] = (color < 0 ? 0 : (color > 255 ? 255 : color)).toString(16);
    if (arr[index].length === 1) arr[index] = "0" + arr[index];
  });

  return arr.join("").toUpperCase();
}


const analizedFunction = rgb;
class Test {
  constructor(initial1, initial2, initial3, expected) {
    this.initial1 = initial1;
    this.initial2 = initial2;
    this.initial3 = initial3;
    this.expected = expected;
  }

  set test(test) {
    this._test = test;
  }
  get test() {
    return this._test;
  }
  compare() {
    if (this.expected === this._test) return true;
    return false;
  }
}

let test = [
  new Test(255, 255, 255, "FFFFFF"),
  new Test(255, 255, 300, "FFFFFF"),
  new Test(0, 0, 0, "000000"),
  new Test(148, 0, 211, "9400D3"),
  new Test(0, 0, -20, "000000"),
  new Test(300, 255, 255, "FFFFFF"),
  new Test(173, 255, 47, "ADFF2F"),
];

test.forEach(element => {
  element.test = analizedFunction(element.initial1, element.initial2, element.initial3);
  console.log(`test: '${element.initial1}', '${element.initial2}', '${element.initial3}', obtenido '${element.test}', esperado '${element.expected}', test ${element.compare() ? "Passed" : "Failed"}`);
});

