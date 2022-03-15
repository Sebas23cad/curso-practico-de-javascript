const lista1 = [
    2,
    3,
    4,
    1,
    2,
    4,
    2,
    3,
    1,
    2,
];

// let moda;

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

// function calcularModa (lista) {
//     const lista = {};

//     lista.map(
//         function (elemento) {
//             if (lista[elemento]) {
//                 lista[elemento] += 1;
//             } else {
//                 lista[elemento] = 1;
//             }
//         }
//     );
    
//     const lista1Array = Object.entries(lista).sort(
//         function (valorAcumulado, nuevoValor) {
//             return valorAcumulado[1] - nuevoValor[1];
//         }
//     );
    
//     moda = lista1Array[lista1Array.length - 1];
// };

