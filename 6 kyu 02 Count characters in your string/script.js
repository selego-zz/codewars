"use strict";

/*
Count characters in your string
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}

*/

import { Test } from "../test/index.js";

function count(string) {
  const count = {};

  string.split("").forEach(char => {
    count[char] = (char in count) ? count[char] + 1 : 1;
  });

  return count;
}
//* Global Comment Start // just put a bar at the start, no need to uncomment the final line

const analizedFunction = count;


let test = [
  new Test(analizedFunction, [""], {}),
  new Test(analizedFunction, ["a"], { 'a': 1 }),
  new Test(analizedFunction, ["ab"], { 'a': 1, 'b': 1 }),
  new Test(analizedFunction, ["aba"], { 'a': 2, 'b': 1 }),
  new Test(analizedFunction, ["ABC"], { 'A': 1, 'B': 1, 'C': 1 }),
];


test.forEach(element => {
  element.executeTest();
  console.log(element.log_objectCompare);
});

// end global comment  */