arreglo = [1, 2, 3, 4, 5, 6];
let valorActual;

// debe retornar true o false
funcion = valorActual => valorActual % 2 != 0;

nuevoArreglo = fakeFilter(arreglo, funcion);

// ver nuevo arreglo
for (let i=0; i<nuevoArreglo.length; i++) {
    console.log(nuevoArreglo[i]);
}


function fakeFilter(arreglo, funcion) {
    let nuevoArreglo=[];
    let j=0;
  for (let i = 0; i < arreglo.length; i++) {
    if(funcion(arreglo[i])) {
        console.log(arreglo[i]);
        j++;
    }
  }
  return nuevoArreglo;
}


