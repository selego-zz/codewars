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

let test = [
  { initial: [1, 2, 'a', 'b'], expected: [1, 2] },
  { initial: [1, 'a', 'b', 0, 15], expected: [1, 0, 15] },
  { initial: [1, 2, 'aasf', '1', '123', 123], expected: [1, 2, 123] },
];

test.forEach(text => {
  let result = filter_list(text.initial);
  console.log(`test: '${text.initial}', obtenido '${result}', esperado '${text.expected}', test ${compare(result, text.expected) ? "Passed" : "Failed"}`);
});

function compare(a1, a2) {
  if (a1.length !== a2.length) return false;

  a1.forEach(element => { if (!a2.includes(element)) return false; });
  return true;
}
