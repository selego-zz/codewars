"use strict";

/*
Neutralisation
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Worked Example
("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.
Examples
("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"
Notes
The two strings will be the same length.
*/

function neutralise(s1, s2) {
  let c = s1.split("");
  c.forEach((element, index, array) => {
    array[index] = element === s2[index] ? element : "0";
  });

  return c.join("");
}

function neutraliseV2(s1, s2) {
  let res = "";//Strings are inmutable, so I need a new string to return
  for (let i = 0; i < s1.length; i++) {
    res += s1[i] === s2[i] ? s1[i] : "0";
  };
  return res;
}

let test = [
  { s1: "--++--", s2: "++--++", expected: "000000" },
  { s1: "-+-+-+", s2: "-+-+-+", expected: "-+-+-+" },
  { s1: "-++-", s2: "-+-+", expected: "-+00" },
  { s1: "--++", s2: "++++", expected: "00++" },
  { s1: "+++--+---", s2: "++----++-", expected: "++0--000-" },
  { s1: "-----", s2: "-----", expected: "-----" },
  { s1: "-+", s2: "++", expected: "0+" },
  { s1: "--", s2: "-+", expected: "-0" },
  { s1: "-++", s2: "+--", expected: "000" },
  { s1: "++-++--++-", s2: "-+++-++-++", expected: "0+0+0000+0" },
  { s1: "-++-+-++-", s2: "+-++++---", expected: "00+0+000-" },
  { s1: "---++-+--", s2: "-+++--++-", expected: "-00+0-+0-" },
  { s1: "+-----+++-", s2: "--+-+-++--", expected: "0-0-0-++0-" },
  { s1: "+-----+-", s2: "---++-++", expected: "0--00-+0" },
  { s1: "-+--+-+---", s2: "-+--+-+-+-", expected: "-+--+-+-0-" },
  { s1: "+-+", s2: "-++", expected: "00+" },
  { s1: "-++", s2: "-+-", expected: "-+0" },
  { s1: "---+", s2: "-+++", expected: "-00+" },
  { s1: "+--", s2: "+--", expected: "+--" },
];


test.forEach(element => {
  let v1 = neutralise(element.s1, element.s2);
  console.log(`test: '${element.s1}' and '${element.s2}' , obtenido '${v1}', esperado '${element.expected}', test ${v1 === element.expected ? "Passed" : "Failed"}`);
  let v2 = neutraliseV2(element.s1, element.s2);
  console.log(`test: '${element.s1}' and '${element.s2}' , obtenido '${v2}', esperado '${element.expected}', test ${v2 === element.expected ? "Passed" : "Failed"}`);
  console.log("");
});
