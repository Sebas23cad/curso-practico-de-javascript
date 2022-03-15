function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

const lista2 = [
    100,
    200,
    500,
    400000000,
];

function esPar (numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

let mediana;

function calcularMediana (lista) {
    const listaOrden = lista.sort();
    const mitadLista = parseInt(listaOrden.length / 2);
    if (esPar(listaOrden.length)) {
        const elemento1 = listaOrden[mitadLista];
        const elemento2 = listaOrden[mitadLista - 1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento1y2;
        return mediana;
    } else {
        mediana = listaOrden[mitadLista];
        return mediana;
    }
};
