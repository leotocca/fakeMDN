function fakeEvery(arr, fn) {
  let allPassThetest = true;
  for (const element of arr) {
    if (!fn(element)) {
      allPassThetest = false;
    }
  }
  return allPassThetest;
}
