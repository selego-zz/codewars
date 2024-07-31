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
/* siguiente intento: con 2 arrays pila, me parece más divertido */

// 1º pasar a string
// 2º pasar a array
// 3º dividir
// 4º ordenar
// 5º Volvemos a juntar, por que es más fácil quitar un elemento de enmedio de una cadena que de un array
// 6º recorrer de derecha a izquierda -> mejor con for normal
//// para cada elemento: buscar si hay un elemento de menor valor al suyo que podamos meter en esa posción
// si salimos del for sin encontrar un valor válido: no hay nada más pequeño: devolvemos -1

// funciones auxiliares:
// reconstruir número:
//// 0º todavía podemos tener una condición de error: que sea un nº que empiece por 0 => la comprobamos
//// tiene 3 fases:
//// 1º todo lo que había a la izquierda de la posición que vamos a sustituir
////// metemos cada número en orden
////// lo quitamos del array de posibilidades
//// 2º Metemos el número cambiado
//// 3º Metemos el resto de números, primero los más grandes
////// volvemos a convertir en array el array de posibilidades
////// lo ordenamos
////// vamos añadiendo los ultimos elementos con pop (cuando haces pop ya no hay stop)
// eliminar un elemento de una cadena
//// seguro que hay una orden que haga esto... buscar

function nextSmaller(n) {
  let str = n + "";
  let arr = str.split("").sort().join("");
  for (let i = str.length - 1; i >= 0; i--) {
    let j = arr.length - 1;
    while (j >= 0 && arr[j] >= str[i]) j--; //recorremos todos los elementos, buscando para esa posición un nº menor
    if (j < 0) continue; // si j es negativo, es que nos hemos quedado sin elementos posibles, así que probamos el siguiente dígito
    // si estamos en este punto, hemos encontrado un valor que podemos meter en esta posición para construir un nº menor -> reconstruimos y mostramos
    return reconstructNumber(str, arr, i, j);
  }
  return -1;
}
function reconstructNumber(str, arr, indexStr, indexArr) {
  if (indexStr === 0 && arr[indexArr] === 0) return -1;
  let char = arr[indexArr];
  arr = removeElement(arr, indexArr);

  let ret = "";
  for (let i = 0; i < indexStr; i++) {
    ret += str[i];
    arr = removeElement(arr, arr.indexOf(str[i]));
  }
  ret += char;

  let resto = arr.split("").sort();
  while (resto.length)
    ret += resto.pop();
  return +ret;
}

function removeElement(str, index) {
  if (index === 0) return str.slice(index + 1)
  if (index === str.length - 1) return str.slice(0, index)
  return str.slice(0, index) + str.slice(index + 1)
}


//* Global Comment Start // just put a bar at the start, no need to uncomment the final line

// TEST CODE 

const analizedFunction = nextSmaller;


let test = [
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