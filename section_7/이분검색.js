// 이진탐색 -> 오름차순으로 정렬하고 m이 어디

function solution(n, m, arr = []) {
  let answer = 0;
  let left = 0;
  let right = arr.length - 1;
  const sortedArr = quickSort(arr);
  for (let i = 0; i < sortedArr.length; i++) {
    let mid = Math.floor((left + right) / 2);
    if (sortedArr[mid] === m) {
      answer = mid + 1;
      break;
    } else if (sortedArr[mid] > m) right = mid - 1;
    else left = mid + 1;
  }

  return answer;
}

console.log(solution(8, 32, [23, 87, 65, 12, 57, 32, 99, 81])); // 3

function quickSort(arr = []) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
