const fakeAreEqual = (array1, array2) => {
	let result = [];
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] === array2[i]) {
			result.push(true);
		} else {
			result.push(false);
		}
	}

	if (result.includes(false)) {
		return false;
	} else {
		return true;
	}
};

const fakeFindIndex = (arr, callbackfunction) => {
	for (let i = 0; i < arr.length; i++) {
		if (callbackfunction(arr[i])) {
			return i;
		}
	}
	return -1;
};

const fakeLastIndex = (array, value) => {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === value) {
			result = i;
		}
	}
	if (result !== 0) {
		return result;
	} else {
		return -1;
	}
};

function fakeConcat(array1, array2) {
	const arrayConcated = [];
	for (const elem of array1) {
		arrayConcated.push(elem);
	}
	for (const elem of array2) {
		arrayConcated.push(elem);
	}
	return arrayConcated;
}

function fakeArrayMin(array) {
	if (array.length === 0) return undefined;
	return fakeReduce(array, (accumulator, value) =>
		value < accumulator ? value : accumulator
	);
}

function fakeArrayMax(array) {
	if (array.length === 0) return undefined;
	return fakeReduce(arr, (accumulator, value) =>
		value > accumulator ? value : accumulator
	);
}

function removeDuplicatesFrom(arr) {
	const duplicateFreeList = [];
	for (const elem of arr) {
		if (!fakeIncludes(duplicateFreeList, elem)) {
			duplicateFreeList.push(elem);
		}
	}
	return duplicateFreeList;
}

function fakeReduce(array, callbackFunction, initialValue) {
	let begin = 0;
	if (initialValue === undefined) {
		initialValue = arr[0];
		begin = 1;
	}
	let accumulator = initialValue;

	for (let i = begin; i < array.length; i++) {
		accumulator = callbackFunction(accumulator, arr[i]);
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
	fakeForEach(array, element => {
		if (!callbackFunction(element)) {
			return false;
		}
	});
	return true;
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
	return fakeIndexOf(array, value) !== -1;
}

function fakeIntersection(array1, array2) {
	const arrIntersection = [];
	for (const i of array1) {
		for (const j of array2) {
			if (i === j) {
				arrIntersection.push(j);
			}
		}
	}
	return arrIntersection;
}

function fakeIntersection(array1, array2) {
	const repetedIntersection = fakeFilter(array1, x => fakeIncludes(array2, x));
	return removeDuplicatesFrom(repetedIntersection);
}

function fakeUnion(arr1, ...arr2) {
	const arrUnion = arr1.slice();
	fakeForEach(arr2, function(i) {
		fakeForEach(i, function(j) {
			if (!fakeIncludes(arrUnion, j)) {
				arrUnion.push(j);
			}
		});
	});
	return arrUnion;
}
