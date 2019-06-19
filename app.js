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
		if (array[i] === value) {
			return array[i];
		}
	}
	return -1;
}

function fakeIncludes(arr, value) {
	return fakeIndexOf(arr, value) === -1 ? false : true;
}

function fakeIntersection(array1, array2) {
	let arrIntersection = [];
	for (const i of array1) {
		for (const j of array2) {
			if (i === j) {
				arrIntersection.push(j);
			}
		}
	}
	return arrIntersection;
}
