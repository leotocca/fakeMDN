arreglo = [1, 2, 3, 4, 5, 6];
let valorActual;

// funcion cualquiera q debe retornar true o false, esta se fija si un valor es impar
funcionCualquiera = valorActual => valorActual % 2 != 0;

// llamo a fakeFilter q devuelve un nuevoarreglo
nuevoArreglo = fakeFilter(arreglo, funcionCualquiera);

// ver el nuevo arreglo filtrado
for (let i=0; i<nuevoArreglo.length; i++) {
    console.log(nuevoArreglo[i]);
}


function fakeFilter(arreglo, funcion) {   // filtra el arreglo de acuerdo a la funcion y devuelve un arreglo filtrado     
    let nuevoArreglo=[];
    let j=0;                              // j es el indice del nuevo arreglo que voy creando
  for (let i = 0; i < arreglo.length; i++) {
    if(funcion(arreglo[i])) {
        console.log(arreglo[i]);
        j++;
    }
  }
  return nuevoArreglo;
}


