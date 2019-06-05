function fakeForEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    //aca lo que estoy haciendo es asignarle a la misma posicion del array, el valor que aplicó la funcion
    arr[i] = fn(arr[i]);
  }
  //y aca estoy devolviendo el nuevo array
  return arr;
}

console.log(fakeForEach(['tincho', 'peter', 'nico'], x => x + 'Medialunas'));
console.log(fakeForEach([1, 2, 3], multiplyBy2 => multiplyBy2 * 2));
