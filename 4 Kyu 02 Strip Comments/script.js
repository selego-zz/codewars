"use strict";
import { Test } from "../test/index.js";

/*
Strip Comments
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

*/

function solution(text, markers) {
  let removing = false;
  const len = text.length;
  let res = "";
  for (let i = 0; i < len; i++) {
    if ((removing) && (text[i] === '\n')) { res = removeOnlyRightSpaces(res); removing = false; }
    if ((!removing) && (markers.includes(text[i]))) { res = removeOnlyRightSpaces(res); removing = true; }
    if (!removing) res += text[i];
  }

  return removeOnlyRightSpaces(res);
}
function removeOnlyRightSpaces(string) {
  let str = string.split("");
  while (str[str.length - 1] === " ") str.pop();
  return str.join("");
}

//* Global Comment Start // just put a bar at the start, no need to uncomment the final line

// TEST CODE 

const analizedFunction = solution;


let test = [
  new Test(analizedFunction, [' yUKd^\nf*xYN+Efs\\y \nbLU~kdLJE*j$QagffmGtQdtm+', []], ' yUKd^\nf*xYN+Efs\\y \nbLU~kdLJE*j$QagffmGtQdtm+'),


  new Test(analizedFunction, ['1aa bb cc', []], '1aa bb cc'),
  new Test(analizedFunction, ['2aa bb cc  ', []], '2aa bb cc'),
  new Test(analizedFunction, ['  3aa bb cc', []], '  3aa bb cc'),
  new Test(analizedFunction, ['  4aa # bb # cc  ', []], '  4aa # bb # cc'),

  new Test(analizedFunction, ['11aa bb cc', ['#']], '11aa bb cc'),
  new Test(analizedFunction, ['22aa bb # cc', ['#']], '22aa bb'),
  new Test(analizedFunction, ['33aa# bb cc', ['#']], '33aa'),
  new Test(analizedFunction, ['44aa #bb cc', ['#']], '44aa'),
  new Test(analizedFunction, ['55aa # bb # cc', ['#']], '55aa'),
  new Test(analizedFunction, ['#aa bb cc', ['#']], ''),

  new Test(analizedFunction, ['#aa bb\ncc dd', ['#']], '\ncc dd'),
  new Test(analizedFunction, ['8aa # bb\ncc dd', ['#']], '8aa\ncc dd'),
  new Test(analizedFunction, ['9aa bb\n#cc dd', ['#']], '9aa bb\n'),
  new Test(analizedFunction, ['1aa bb\ncc # dd', ['#']], '1aa bb\ncc'),
  new Test(analizedFunction, ['2aa bb\ncc dd#', ['#']], '2aa bb\ncc dd'),

  new Test(analizedFunction, ['3aa bb\ncc dd', ['#', '!']], '3aa bb\ncc dd'),
  new Test(analizedFunction, ['4aa # bb\ncc dd', ['#', '!']], '4aa\ncc dd'),
  new Test(analizedFunction, ['5aa bb\ncc ! dd', ['#', '!']], '5aa bb\ncc'),
  new Test(analizedFunction, ['#aa bb\n!cc dd', ['#', '!']], '\n'),
  new Test(analizedFunction, ['6aa ! bb\ncc # dd', ['#', '!']], '6aa\ncc'),
  new Test(analizedFunction, ['7aa bb#\ncc dd!', ['#', '!']], '7aa bb\ncc dd'),

  new Test(analizedFunction, ['8aa + bb\ncc - dd\nee * ff', ['+', '-', '*']], '8aa\ncc\nee'),
  new Test(analizedFunction, ['9aa / bb\ncc ^ dd\nee $ ff', ['/', '^', '$']], '9aa\ncc\nee'),
];
test.forEach(element => {
  element.executeTest();
  console.log(element.log);
});

// end global comment  */