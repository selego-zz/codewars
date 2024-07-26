"use strict"


/* 
Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal case).The next words should be always capitalized.

  Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

/* 
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
    assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
    assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
    assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
  });
});
 */



function toCamelCase(str) {
  if (str.length === 0) return str;
  let words = str.split(/[-_]/);
  words.forEach((element, index, array) => {
    if (index !== 0) array[index] = firstLetterUcase(element);
  });
  return words.join("");
}
function firstLetterUcase(str) {
  let word = str.split("");
  word[0] = word[0].toUpperCase();
  return word.join("");
}

let test = [
  { initial: '', corrected: '' },
  { initial: 'the_stealth_warrior', corrected: 'theStealthWarrior' },
  { initial: 'The-Stealth-Warrior', corrected: 'TheStealthWarrior' },
  { initial: 'A-B-C', corrected: 'ABC' },
  { initial: 'the-pippi_was_cute', corrected: 'thePippiWasCute' },
  { initial: 'The_Cat_is_evil', corrected: 'TheCatIsEvil' },
];

test.forEach(text => {
  let result = toCamelCase(text.initial);
  console.log(`test: '${text.initial}', obtenido '${result}', esperado '${text.corrected}', test ${result === text.corrected ? "Passed" : "Failed"}`);
});
