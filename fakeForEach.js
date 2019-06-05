function fakeForEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    //functions will be called in each of the array elements
    arr[i] = fn(arr[i]);
  }
  //returns the new array
  return arr;
}

console.log(fakeForEach(['tincho', 'peter', 'nico'], x => x + 'Medialunas'));
console.log(fakeForEach([1, 2, 3], multiplyBy2 => multiplyBy2 * 2));
