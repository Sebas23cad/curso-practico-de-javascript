// codigo del Cuadrado.
console.group();

const ladoCuadrado = 5;
console.log("Los lados de mi cuadrado mide: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro de mi cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área de mi cuadrado es: " + areaCuadrado + "cm^2");
// Aqui basicamente agrupamos todos los console.
console.groupEnd();

// codigo del triangulo
console.group();

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados de mi triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm, ");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro de mi cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área de mi cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();