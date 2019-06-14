function fakeReduce(array, callbackFunction) {
  let accumulator = arr[0];
  for (let i = 1; i < arr.length; i++) {
    accumulator = callbackFunction(accumulator, arr[i]);
  }
  return accumulator;
}

function fakeSum(array) {
  return fakeReduce(array, (a, b) => a + b);
}

function fakeFilter(array, callbackFunction) {
  let arrFiltered = [];
  let j = 0; // j is the index of the new array I´m creating
  fakeForEach(array, elem => {
    if (callbackFunction(elem)) {
      arrFiltered[j] = elem;
      j++;
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
  let atLeastOnePassesTheTest = false;
  for (const element of array) {
    if (callbackFunction(element)) {
      atLeastOnePassesTheTest = true;
    }
  }
  return atLeastOnePassesTheTest;
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
  return fakeIndexOf(array, value) === -1 ? false : true;
}

function fakeIntersection(array1, array2) {
  let arrIntersection = [];
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
      if (!arrUnion.includes(j)) {
        arrUnion.push(j);
      }
    });
  });
  return arrUnion;
}
