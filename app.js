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

Array.prototype._forEach = function(callbackFunction) {
	for (const element of this) {
		callbackFunction(element);
	}
};

Array.prototype._isEqual = function(array2) {
	let result = [];
	if (this.length===0){
		return false;
		}
	for (let i = 0; i < this.length; i++) {
		if (this[i] === array2[i]) {
			result.push(true);
		} else {
			return false;
		}
	}
	return true;
};

Array.prototype._findIndex = function(callbackfunction) {
	for (let i = 0; i < this.length; i++) {
		if (callbackfunction(this[i])) {
			return i;
		}
	}
	return -1;
};

Array.prototype._lastIndexOf = function(value) {
	let result = 0;
	for (let i = 0; i < this.length; i++) {
		if (this[i] === value) {
			result = i;
		}
	}
	if (result !== 0) {
		return result;
	} else {
		return -1;
	}
};

Array.prototype._concat = function(array) {
	return [...this, ...array];
};

Array.prototype._min = function() {
	if (this.length === 0) return undefined;
	return this._reduce((accumulator, value) =>
		value < accumulator ? value : accumulator
	);
};

Array.prototype._max = function() {
	if (this.length === 0) return undefined;
	return this._reduce((accumulator, value) =>
		value > accumulator ? value : accumulator
	);
};

Array.prototype._sum = function() {
	return this._reduce((a, b) => a + b);
};

Array.prototype._filter = function(callbackFunction) {
	const arrFiltered = [];
	this._forEach(elem => {
		if (callbackFunction(elem)) {
			arrFiltered.push(elem);
		}
	});
	return arrFiltered;
};

Array.prototype._some = function(callbackFunction) {
	for (const element of this) {
		if (callbackFunction(element)) {
			return true;
		}
	}
	return false;
};

Array.prototype._every = function(callbackFunction) {
	for (const element of this) {
		if (!callbackFunction(element)) {
			return false;
		}
	}
	return true;
};

Array.prototype._find = function(callbackFunction) {
	for (const elem of this) {
		if (callbackFunction(elem)) {
			return elem;
		}
	}
	return undefined;
};

Array.prototype._map = function(callbackFunction) {
	const arrMaped = [];
	this._forEach(elem => arrMaped.push(callbackFunction(elem)));
	return arrMaped;
};

Array.prototype._indexOf = function(value) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === value) {
			return i;
		}
	}
	return -1;
};

Array.prototype._indexOfRecursive = function(value) {
	if (!this.length) return -1;
	return this.pop() === value ? this.length : this._indexOfRecursive(value);
};

Array.prototype._includes = function(value) {
	return this._indexOf(value) !== -1;
};

Array.prototype._intersection = function(array2) {
	return Array.from(new Set(this._filter(x => array2._includes(x))));
};

Array.prototype._union = function(array2) {
	return Array.from(new Set([...this, ...array2]));
};
