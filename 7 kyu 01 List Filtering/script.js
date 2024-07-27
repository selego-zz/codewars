"use strict";

/*
List Filtering
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(l) {
  return l.filter(element => typeof (element) === "number");
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
    if (this._test.length !== this.expected.length) return false;

    this._test.forEach(element => { if (!this.expected.includes(element)) return false; });
    return true;
  }
}
let test = [
  new Test([1, 2, 'a', 'b'], [1, 2]),
  new Test([1, 'a', 'b', 0, 15], [1, 0, 15]),
  new Test([1, 2, 'aasf', '1', '123', 123], [1, 2, 123]),
];

test.forEach(element => {
  element.test = filter_list(element.initial);
  console.log(`test: '${element.initial}', obtenido '${element.test}', esperado '${element.expected}', test ${element.compare() ? "Passed" : "Failed"}`);
});

