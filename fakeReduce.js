arreglo = [1, 2, 3, 4];
let valorActual;
let funcionCualquiera = (x, y) => x*y;
console.log(fakeReduce(arreglo, funcionCualquiera)); // muestra el resultado del arreglo reducido


function fakeReduce(arre, funcion) {
  let acumulador = 1;
  for (let i = 0; i < arre.length; i++) {
    acumulador = funcion(acumulador, arre[i]);
  }
  return acumulador;
}


