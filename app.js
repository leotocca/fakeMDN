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

/*
const array = [1, 2, 3, 4, 5];

const even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
}
*/
function fakeSome(arr, fn) {
  for (let element of arr) {
    //If fn returns true with any of the array elements, iteration stops
    if (fn(element)) {
      return true;
    }
  }
  //Iterates through the whole array and if it doesnt return true, it will be false.
  return false;
}
//console.log(fakeSome(array, even))
