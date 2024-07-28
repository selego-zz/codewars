"use strict";

/*
Two to One
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

function longest(s1, s2) {
  let set = new Set((s1 + s2).split("").sort());
  return Array.from(set).join("");
}

const analizedFunction = longest;
class Test {
  constructor(initial1, initial2, expected) {
    this.initial1 = initial1;
    this.initial2 = initial2;
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
  new Test("xyaabbbccccdefww", "xxxxyyyyabklmopq", "abcdefklmopqwxy"),
  new Test("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"),
  new Test("aretheyhere", "yestheyarehere", "aehrsty"),
  new Test("loopingisfunbutdangerous", "lessdangerousthancoding", "abcdefghilnoprstu"),
  new Test("inmanylanguages", "theresapairoffunctions", "acefghilmnoprstuy"),
];

test.forEach(element => {
  element.test = analizedFunction(element.initial1, element.initial2);
  console.log(`test: '${element.initial1}', '${element.initial2}', obtenido '${element.test}', esperado '${element.expected}', test ${element.compare() ? "Passed" : "Failed"}`);
});

