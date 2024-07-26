"use strict";

/*
Theoretical Material
You are given two vectors starting from the origin(x = 0, y = 0) with coordinates(x1, y1) and(x2, y2).Your task is to find out if these vectors are collinear.Collinear vectors are vectors that lie on the same straight line.They can be directed in the same or opposite directions.One vector can be obtained from another by multiplying it by a certain number.In terms of coordinates, vectors(x1, y1) and(x2, y2) are collinear if (x1, y1) = (k * x2, k * y2), where k is any number acting as a coefficient.

Problem Description
Write the function collinearity(x1, y1, x2, y2), which returns a Boolean type depending on whether the vectors are collinear or not.

all coordinates are integers
-1000 <= any coordinate <= 1000
Notes
All vectors start from the origin (x=0, y=0).
Be careful when handling cases where x1, x2, y1, or y2 are zero to avoid division by zero errors.
A vector with coordinates (0, 0) is collinear to all vectors.
Examples
(1,1,1,1) ➞ true
(1,2,2,4) ➞ true
(1,1,6,1) ➞ false
(1,2,-1,-2) ➞ true
(1,2,1,-2) ➞ false
(4,0,11,0) ➞ true
(0,1,6,0) ➞ false
(4,4,0,4) ➞ false
(0,0,0,0) ➞ true
(0,0,1,0) ➞ true
(5,7,0,0) ➞ true 

*/

function collinearity(x1, y1, x2, y2) {
  // vectores colineales -> (x1, y1) = (k * x2, k * y2) ->
  //// si x1 = k * x2 entonces y1 = k * y2
  //// k= x1/x2 y k=y1/y2
  //// por tanto x1/x2 = y1/y2 -> si se da devolvemos true, sino false

  // posibles errores: x2 o y2 sean 0
  //// como si x e y son 0 se considera colineal, eso no sería error, y se devolvería true
  //// si x2 es 0, 
  ////// si x1 es 0, ambos vectores son paralelos, la línea es horizontal, devolvemos true
  ////// sino, uno es horizontal y otro no devolvemos false
  //// si y2 es 0, pero y1 es 0 , ambos vectores son paralelos, la línea es vertical, devolvemos true
  ////// sino, uno es vertical y otro no devolvemos false


  // pongo primero los errores, para evitar.... pos eso ^^
  if (x2 === 0) {
    if (y2 === 0) // x e y son 0, por tanto colineal
      return true;
    if (x1 === 0)
      return true;
    return false;
  }
  if (y2 === 0) {
    if (y1 === 0)
      return true;
    return false;
  }

  if ((x1 / x2) === (y1 / y2)) return true;
  return false;
}

let pruebas =
  [
    { x1: 1, x2: 1, y1: 1, y2: 1, expected: true },
    { x1: 1, x2: 2, y1: 2, y2: 4, expected: true },
    { x1: 1, x2: 1, y1: 6, y2: 1, expected: false },
    { x1: 1, x2: 2, y1: -1, y2: -2, expected: true },
    { x1: 1, x2: 2, y1: 1, y2: -2, expected: false },
    { x1: 4, x2: 0, y1: 11, y2: 0, expected: true },
    { x1: 0, x2: 1, y1: 6, y2: 0, expected: false },
    { x1: 4, x2: 4, y1: 0, y2: 4, expected: false },
    { x1: 0, x2: 0, y1: 0, y2: 0, expected: true },
    { x1: 0, x2: 0, y1: 1, y2: 0, expected: true },
    { x1: 5, x2: 7, y1: 0, y2: 0, expected: true }
  ]

pruebas.forEach(({ x1, x2, y1, y2, expected }) => {
  console.log(`Comprobamos si los vectores (${x1},${x2}) y (${y1},${y2}) son colineales`)
  console.log(`   ===> Esperamos un resultado ${expected ? "Verdadero" : "falso"} y obtenemos ${collinearity(x1, y1, x2, y2) ? "Verdadero" : "falso"}`);
});
