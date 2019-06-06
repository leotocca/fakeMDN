function fakeForEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    //function will be called in each of the array elements
    arr[i] = fn(arr[i]);
  }
  //returns the new array
  return arr;
}

//console.log(fakeForEach(['tincho', 'peter', 'nico'], x => x + 'Medialunas'));
//console.log(fakeForEach([1, 2, 3], multiplyBy2 => multiplyBy2 * 2));

function fakeMap(arr, fn) {
  const arrMaped = [];
  /* for (let i = 0; i < arr.length; i++) {
    arrMaped.push(fn(arr[i]));
  } */
  fakeForEach(arr, function(arr) {
    arrMaped.push(fn(arr));
  });
  return arrMaped;
}
//fakeMap([1,2,3], function(x){return x*2});

function fakeIncludes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
//fakeIncludes([1,2,3], "a");
