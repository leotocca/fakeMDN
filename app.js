const _isEqual = (array1, array2) => {
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

const _findIndex = (arr, callbackfunction) => {
	for (let i = 0; i < arr.length; i++) {
		if (callbackfunction(arr[i])) {
			return i;
		}
	}
	return -1;
};

const _lastIndex = (array, value) => {
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

function _concat(array1, array2) {
	const arrayConcated = [];
	for (const elem of array1) {
		arrayConcated.push(elem);
	}
	for (const elem of array2) {
		arrayConcated.push(elem);
	}
	return arrayConcated;
}

function _min(array) {
	if (array.length === 0) return undefined;
	return _Reduce(array, (accumulator, value) =>
		value < accumulator ? value : accumulator
	);
}

function _max(array) {
	if (array.length === 0) return undefined;
	return _reduce(arr, (accumulator, value) =>
		value > accumulator ? value : accumulator
	);
}

function removeDuplicatesFrom(arr) {
	const duplicateFreeList = [];
	for (const elem of arr) {
		if (!_includes(duplicateFreeList, elem)) {
			duplicateFreeList.push(elem);
		}
	}
	return duplicateFreeList;
}

function _reduce(array, callbackFunction, initialValue) {
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

function _sum(array) {
	return _reduce(array, (a, b) => a + b);
}

function _filter(array, callbackFunction) {
	const arrFiltered = [];
	_forEach(array, elem => {
		if (callbackFunction(elem)) {
			arrFiltered.push(elem);
		}
	});
	return arrFiltered;
}

function _forEach(array, callbackFunction) {
	for (const element of array) {
		callbackFunction(element);
	}
}

function _some(array, callbackFunction) {
	for (const element of array) {
		if (callbackFunction(element)) {
			return true;
		}
	}
	return false;
}

function _every(array, callbackFunction) {
	_forEach(array, element => {
		if (!callbackFunction(element)) {
			return false;
		}
	});
	return true;
}

function _find(array, callbackFunction) {
	for (const elem of array) {
		if (callbackFunction(elem)) {
			return elem;
		}
	}
	return undefined;
}

function _map(array, callbackFunction) {
	const arrMaped = [];
	_forEach(array, function(array) {
		arrMaped.push(callbackFunction(array));
	});
	return arrMaped;
}

function _indexOf(array, value) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
}

function _indexOfRecursive(array, value) {
	if (!array.length) return -1;
	return array.pop() === value ? array.length : _indexOfRecursive(array, value);
}

function _includes(array, value) {
	return _indexOf(array, value) !== -1;
}

function _intersection(array1, array2) {
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

function _union(arr1, ...arr2) {
	const arrUnion = arr1.slice();
	_forEach(arr2, function(i) {
		_forEach(i, function(j) {
			if (!_includes(arrUnion, j)) {
				arrUnion.push(j);
			}
		});
	});
	return arrUnion;
}
