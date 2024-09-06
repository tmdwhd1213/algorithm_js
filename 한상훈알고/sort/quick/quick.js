function quickSort(arr = []) {
  // 재귀 끝나는 조건
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [2, 1, 5, 3, 6, 4];

console.log(quickSort(arr)); // [1,2,3,4,5,6]
