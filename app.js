arr = [1, 2 , 3, 4 ,5 , 6 , 7 ];

function reductora (a,b) {
  return (a+b);
}
console.log(arr);
console.log(fakeSum(arr));


function fakeForEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    //function will be called in each of the array elements
    arr[i] = fn(arr[i]);
  }
  //returns the new array
  return arr;
}

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


//console.log(fakeForEach(['tincho', 'peter', 'nico'], x => x + 'Medialunas'));
//console.log(fakeForEach([1, 2, 3], multiplyBy2 => multiplyBy2 * 2));

/*
const array = [1, 2, 3, 4, 5];

const even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
}
*/
function fakeSome(arr, fn) {
  for (let element of arr) {
    //If fn returns true with any of the array elements, iteration stops
    if (fn(element)) {
      return true;
    }
  }
  //Iterates through the whole array and if it doesnt return true, it will be false.
  return false;
}
//console.log(fakeSome(array, even))

function fakeMap(arr, fn) {
  const arrMaped = [];
  /* for (let i = 0; i < arr.length; i++) {
    arrMaped.push(fn(arr[i]));
  } */
  fakeForEach(arr, function(arr) {
    arrMaped.push(fn(arr));
  });
  return arrMaped;
}
//fakeMap([1,2,3], function(x){return x*2});

function fakeIncludes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
//fakeIncludes([1,2,3], "a");
