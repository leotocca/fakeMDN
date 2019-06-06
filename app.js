
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
