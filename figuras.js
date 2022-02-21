// codigo del Cuadrado.
console.group("Cuadrados");

function perimetroCuadrado (lado) {
    return  lado * 4;
};

function areaCuadrado (lado) {
    return lado * lado;
};

// Aqui basicamente agrupamos todos los console.
console.groupEnd();

// codigo del triangulo
console.group("Triangulo");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
};

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
};

console.groupEnd();

// codigo del circulos
console.group("Circulos");

// Diámetro
function diametroCirculo (radio) {
    return radio * 2;
};

// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

// Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return  diametro * PI;
};

function areaCirculo (radio) {
    return (radio * radio) * PI;
};

console.groupEnd();

// Aqui interactuamos con el HTML
// Cuadrado

function calcularPerimetroCuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};

// Triangulo.

function calcularPerimetroTriangulo () {
    const input = document.getElementById("inputTriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value, value, value);
    alert(perimetro);
};

function calcularAreaTriangulo () {
    const input = document.getElementById("inputTriangulo");
    const value = input.value;

    const area = areaTriangulo(value, value);
    alert(area);
};

// circulo

function calcularPerimetroCirculo () {
    const input = document.getElementById("inputTriangulo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo () {
    const input = document.getElementById("inputTriangulo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

function calcularDiametroCirculo () {
    const input = document.getElementById("inputTriangulo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}