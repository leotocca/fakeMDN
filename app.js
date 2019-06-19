function fakeMin(arr) {
  if (arr.length == 0) return undefined;
  return fakeReduce(arr, (acc, value) => (value < acc ? value : acc));
}

function fakeMax(arr) {
  if (arr.length == 0) return undefined;
  return fakeReduce(arr, (acc, value) => (value > acc ? value : acc));
}

function fakeReduce(arr, callbackFunction, initialValue) {
  let accumulator = arr[0];
  let begin = 1;
  if (initialValue !== undefined) {
    accumulator = initialValue;
    begin = 0;
  }
  for (const elem of arr) {
    accumulator = callbackFunction(accumulator, elem);
  }
  return accumulator;
}

function fakeSum(array) {
  return fakeReduce(array, (a, b) => a + b);
}

function fakeFilter(array, callbackFunction) {
  const arrFiltered = [];
  fakeForEach(array, elem => {
    if (callbackFunction(elem)) {
      arrFiltered.push(elem);
    }
  });
  return arrFiltered;
}

function fakeForEach(array, callbackFunction) {
  for (const element of array) {
    callbackFunction(element);
  }
}

function fakeSome(array, callbackFunction) {
  for (const element of array) {
    if (callbackFunction(element)) {
      return true;
    }
  }
  return false;
}

function fakeEvery(array, callbackFunction) {
  let allPassTheTest = true;
  fakeForEach(array, element => {
    if (!callbackFunction(element)) {
      allPassTheTest = false;
    }
  });
  return allPassTheTest;
}

function fakeFind(array, callbackFunction) {
  for (const elem of array) {
    if (callbackFunction(elem)) {
      return elem;
    }
  }
  return undefined;
}

function fakeMap(array, callbackFunction) {
  const arrMaped = [];
  fakeForEach(array, function(array) {
    arrMaped.push(callbackFunction(array));
  });
  return arrMaped;
}

function fakeIncludes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

function fakeIndexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function fakeIndexOfRecursive(array, value) {
  if (!array.length) return -1;
  return array.pop() === value
    ? array.length
    : fakeIndexOfRecursive(array, value);
}

function fakeIncludes(array, value) {
  return fakeIndexOf(array, value) != -1;
}

function fakeIntersection(array1, array2) {
  const arrIntersection = [];
  for (const i of arr1) {
    for (const j of arr2) {
      if (i === j) {
        arrIntersection.push(j);
      }
    }
  }
  return arrIntersection;
}

function fakeUnion(arr1, ...arr2) {
  const arrUnion = [];
  for (const i of arr1) {
    arrUnion.push(i);
  }
  fakeForEach(arr2, function(i) {
    fakeForEach(i, function(j) {
      if (!fakeIncludes(arrUnion, j)) {
        arrUnion.push(j);
      }
    });
  });
  return arrUnion;
}
