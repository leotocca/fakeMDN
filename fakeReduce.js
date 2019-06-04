arreglo = [1, 2, 3, 4];
let valorActual;

let funcion = function suma(acumulador, valorActual) {
    return acumulador+valorActual;
}

console.log(fakeReduce(arreglo, funcion));


function fakeReduce(arreglo, funcion) {
  let acumulador = 0;
  for (let i = 0; i < arreglo.length; i++) {
    acumulador = funcion(acumulador, arreglo[i]);
  }
  return acumulador;
}


