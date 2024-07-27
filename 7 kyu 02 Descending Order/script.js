"use strict";

/*
Descending Order
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n) {
  return +("" + n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

class Test {
  constructor(initial, expected) {
    this.initial = initial;
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
  new Test(0, 0),
  new Test(1, 1),
  new Test(111, 111),
  new Test(15, 51),
  new Test(1021, 2110),
  new Test(123456789, 987654321),
];

test.forEach(element => {
  element.test = descendingOrder(element.initial);
  console.log(`test: '${element.initial}', obtenido '${element.test}', esperado '${element.expected}', test ${element.compare() ? "Passed" : "Failed"}`);
});

