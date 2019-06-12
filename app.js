function fakeReduce(arr, callbackFunction) {
  let accumulator = arr[0];
  for (let i = 1; i < arr.length; i++) {
    accumulator = callbackFunction(accumulator, arr[i]);
  }
  return accumulator;
}

function fakeSum(arr) {
  return fakeReduce(arr, (a, b) => a+b); 
}

function fakeFilter(arr, callbackFunction) {
  // filters the array using callbackFunction and returns filtered array
  let newarr = [];
  let j = 0; // j is the index of the new array I´m creating
  fakeForEach(arr,  elem => {
    if (callbackFunction(elem)) {
      newarr[j] = elem;
      j++;
    }
  })
  return newarr;
}

function fakeForEach(arr, fn) {
  for (let element of arr) {
    fn(element);
  }
}

function fakeSome(arr, fn) {
  let atLeastOnePassesTheTest = false;
  for (let element of arr) {
    if (fn(element)) {
      atLeastOnePassesTheTest = true;
    }
  }
  return atLeastOnePassesTheTest;
}

function fakeMap(arr, fn) {
  const arrMaped = [];
  fakeForEach(arr, function(arr) {
    arrMaped.push(fn(arr));
  });
  return arrMaped;
}

function fakeIncludes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

