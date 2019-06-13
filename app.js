function fakeReduce(arr, callbackFunction) {
	let accumulator = arr[0];
	for (let i = 1; i < arr.length; i++) {
		accumulator = callbackFunction(accumulator, arr[i]);
	}
	return accumulator;
}

function fakeSum(arr) {
	return fakeReduce(arr, (a, b) => a + b);
}

function fakeFilter(arr, callbackFunction) {
	let newarr = [];
	let j = 0; // j is the index of the new array I´m creating
	fakeForEach(arr, elem => {
		if (callbackFunction(elem)) {
			newarr[j] = elem;
			j++;
		}
	});
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

function fakeEvery(arr, fn) {
  let allPassTheTest = true;
  fakeForEach(arr, element => {
    if (!fn(element)) {
      allPassTheTest = false;
    }
  });
  return allPassTheTest;
}

function fakeFind(array1, fn) {
  for (const elem of array1) {
    if (fn(elem)) {
      return elem;
    }
  }
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

function fakeIndexOf(array, value) {
	for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

function fakeIndexOfRecursive(arr, val) {
	if (typeof(arr)=="string") arr = arr.split('');
	if (!arr.length) return -1;
    return (arr.pop()===val) ? arr.length : fakeIndexOfRecursive(arr, val); 
}

function fakeIncludes(arr, value) {
	return fakeIndexOf(arr, value) === -1 ? false : true;
}

function fakeIntersection(arr1, arr2) {
	let newArr = [];
	for (const i of arr1) {
		for (const j of arr2) {
			if (i === j) {
				newArr.push(j);
			}
		}
	}
	return newArr;
}

function fakeUnion(arr1, ...arr2) {
	const newArr = [];
	for (const i of arr1) {
		newArr.push(i);
	}
	fakeForEach(arr2, function(i) {
		fakeForEach(i, function(j) {
			if (!newArr.includes(j)) {
				newArr.push(j);
			}
		});
	});
	return newArr;
}
