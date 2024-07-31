"use strict";
import { Test } from "../test/index.js";

/*
Persistent Bugger
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

*/

function persistence(num) {
  if (num <= 9) return 0;
  let i = 1;
  while (((num = (num + "").split("").reduce((ac, n) => ac * n)) + "").split("").length > 1) i++
  return i;
}




//* Global Comment Start // just put a bar at the start, no need to uncomment the final line

// TEST CODE 

const analizedFunction = persistence;


let test = [
  new Test(analizedFunction, [39], 3),
  new Test(analizedFunction, [4], 0),
  new Test(analizedFunction, [25], 2),
  new Test(analizedFunction, [999], 4),
];

test.forEach(element => {
  element.executeTest();
  console.log(element.log);
});

// end global comment  */