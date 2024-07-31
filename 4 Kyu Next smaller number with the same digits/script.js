"use strict";
import { Test } from "../test/index.js";

/*
Next smaller number with the same digits
Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."
http://www.codewars.com/kata/next-bigger-number-with-the-same-digits

*/

//recorro el array de izquierda a derecha
// para cada elemento, busco en el array de opciones el mayor numero menor
// lo busco de menor a mayor, así si no hay ninguno, ni lo intenta
//   
function nextSmaller(n) {
  let str = "" + n;
  let arr = [str[str.length - 1]];
  for (let i = str.length - 2; i >= 0; i--) {
    let j = 0;
    while ((j < arr.length) && (+arr[j] < +str[i])) j++;

    arr.push(str[i]);
    if (arr[--j] < str[i]) {// hemos encontrado un elemento.
      if ((i == 0) && (+arr[j] === 0)) return -1;// el primer elemento no puede ser 0
      let cadena = "";
      if (i > 0) cadena = str.slice(0, i);
      cadena += arr[j];
      delete arr[j];
      arr.sort();
      arr.pop();
      while (arr.length)
        cadena += arr.pop();
      return +cadena;
    }
    arr.sort();
  }
  return -1;
}


//* Global Comment Start // just put a bar at the start, no need to uncomment the final line

// TEST CODE 

const analizedFunction = nextSmaller;


let test = [
  new Test(analizedFunction, [1027], -1),

  new Test(analizedFunction, [21], 12),
  new Test(analizedFunction, [531], 513),
  new Test(analizedFunction, [2071], 2017),
  new Test(analizedFunction, [9], -1),
  new Test(analizedFunction, [111], -1),
  new Test(analizedFunction, [135], -1),
  new Test(analizedFunction, [1027], -1),
  new Test(analizedFunction, [21], 12),
  new Test(analizedFunction, [907], 790),
  new Test(analizedFunction, [531], 513),
  new Test(analizedFunction, [135], -1),
  new Test(analizedFunction, [2071], 2017),
  new Test(analizedFunction, [1027], -1),
  new Test(analizedFunction, [414], 144),
  new Test(analizedFunction, [123456798], 123456789),
  new Test(analizedFunction, [123456789], -1),
  new Test(analizedFunction, [1234567908], 1234567890),
];

test.forEach(element => {
  element.executeTest();
  console.log(element.log);
});

// end global comment  */