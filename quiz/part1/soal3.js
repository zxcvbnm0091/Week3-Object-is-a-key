// ==========================
// Soal 3
// ==========================
function cariMedian(arr) {
  // you can only write your code here!
  let halfLen = arr.length / 2;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  if (arr.length % 2 == 0) {
    return (arr[halfLen] + arr[halfLen - 1]) / 2;
  }

  return arr[Math.floor(halfLen)];
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

// ------------------------------------
console.log("");
// ------------------------------------
