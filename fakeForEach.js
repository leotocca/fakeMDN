const arrayExample = ['Tincho', 'Leder', 'Leo', 'Cari', 'Peter'];

//forEach method
/*
arrayExample.forEach(function(element) {
  console.log(element);
});
*/

//fakeForEach

function fakeForEach() {
  for (let i = 0; i < arrayExample.length; i++) {
    console.log(arrayExample[i]);
  }
}
fakeForEach();
