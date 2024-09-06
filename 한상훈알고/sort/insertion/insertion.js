const arr = [5, 2, 1, 4, 7, 6];

console.log(insertionSort(arr)); // [1,2,4,5,6,7]

function insertionSort(arr = []) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}
