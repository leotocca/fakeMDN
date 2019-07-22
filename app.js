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

Array.prototype._reduce = function(callbackFunction, initialValue) {
	let begin = 0;
	if (initialValue === undefined) {
		initialValue = this[0];
		begin = 1;
	}
	let accumulator = initialValue;

	for (let i = begin; i < this.length; i++) {
		accumulator = callbackFunction(accumulator, this[i]);
	}

	return accumulator;
};

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

Array.prototype._forEach = function(callbackFunction) {
	for (const element of this) {
		callbackFunction(element);
	}
};

Array.prototype._some = function(callbackFunction) {
	for (const element of this) {
		if (callbackFunction(element)) {
			return true;
		}
	}
	return false;
};

function _every(array, callbackFunction) {
	_forEach(array, element => {
		if (!callbackFunction(element)) {
			return false;
		}
	});
	return true;
}

Array.prototype._find = function(callbackFunction) {
	for (const elem of this) {
		if (callbackFunction(elem)) {
			return elem;
		}
	}
	return undefined;
};

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
	const repetedIntersection = fakeFilter(array1, x => fakeIncludes(array2, x));
	return removeDuplicatesFrom(repetedIntersection);
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
