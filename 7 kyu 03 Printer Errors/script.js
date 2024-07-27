"use strict";

/*
Printer Errors
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

function printerError(s) {
  let errCount = 0;
  s.toLowerCase().split("").forEach(char => { if (char > "m") errCount++; });
  return errCount + "/" + s.length;
}

const analizedFunction = printerError;
let test = [
  new Test("aaabbbbhaijjjm", "0/14"),
  new Test("aaaxbbbbyyhwawiwjjjwwm", "8/22"),
  new Test("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz", "3/56"),
];


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

test.forEach(element => {
  element.test = analizedFunction(element.initial);
  console.log(`test: '${element.initial}', obtenido '${element.test}', esperado '${element.expected}', test ${element.compare() ? "Passed" : "Failed"}`);
});

