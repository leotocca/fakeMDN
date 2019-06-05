/*
EL CODIGO COMENTADO ES PARA PROBAR LAS FUNCIONES
arreglo = [1, 2, 3, 4, 5, 6];
console.log("Arreglo original: %s", arreglo);

//dos funciones para probar los métodos,
//la 1ra devuelve si un valor es impar o no, la 2da el producto de dos parámetros
let funcionFiltradora = x => x % 2 != 0;
let funcionReducidora = (x, y) => x + y;

arregloFiltrado = fakeFilter(arreglo, funcionFiltradora);
console.log(`Arreglo filtrado: ${arregloFiltrado}`);

arregloReducido= fakeReduce(arreglo, funcionReducidora); 
console.log(`Arreglo reducido: ${arregloReducido}`);

arregloReducido=fakeReduce(arreglo, function (x,y){
    return x + y**2;
})
console.log(`Arreglo reducido: ${arregloReducido}`);

*/

function fakeReduce(arre, funcion) {
  let acumulador = arre[0];
  for (let i = 1; i < arre.length; i++) {
    acumulador = funcion(acumulador, arre[i]);
  }
  return acumulador;
}

function fakeFilter(arreglo, funcion) {
  // filtra el arreglo de acuerdo a la funcion y devuelve un arreglo filtrado
  let nuevoArreglo = [];
  let j = 0; // j es el indice del nuevo arreglo que voy creando
  for (let i = 0; i < arreglo.length; i++) {
    if (funcion(arreglo[i])) {
      nuevoArreglo[j] = arreglo[i];
      j++;
    }
  }
  return nuevoArreglo;
}
