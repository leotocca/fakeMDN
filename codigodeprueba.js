
//EL CODIGO COMENTADO ES PARA PROBAR LAS FUNCIONES
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

let resultado = fakeMap(arreglo, function(x){return x**2});
console.log(`Arreglo mapeado : ${resultado}`);

console.log(`fakeIncludes: ${fakeIncludes(arreglo, 3)}`);

function fakeIncludes(arr, value){
	for ( let i=0; i<arr.length ; i++){
		if (arr[i]===value){
			return true;
        }
    }
	return false;
}



function fakeMap(arr, fn) {
    let arrMaped = [];
    for (let i = 0; i < arr.length; i++) {
      arrMaped.push(fn(arr[i]));
    }
    return arrMaped;
  }
  
  
function fakeReduce(arr, callbackFunction) {
  let accumulator = arr[0];
  for (let i = 1; i < arr.length; i++) {
    accumulator = callbackFunction(accumulator, arr[i]);
  }
  return accumulator;
}

function fakeFilter(arr, callbackFunction) {
  // filters the array using callbackFunction and returns filtered array
  let newarr = [];
  let j = 0; // j is the index of the new array I´m creating
  for (let i = 0; i < arr.length; i++) {
    if (callbackFunction(arr[i])) {
      newarr[j] = arr[i];
      j++;
    }
  }
  return newarr;
}
