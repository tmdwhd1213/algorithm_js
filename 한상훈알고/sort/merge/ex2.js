// const arr = [1, 3, 5, 7];
/**
 * 결과물:
 * 1
 * 3 5
 * 7 7 7
 */

/**
 * 1 ~ N까지 랜덤한 숫자가 무작위로 설정된 배열을 생성.
 */

// 1.
let arr = [];
for (let i = 0; i < Math.floor(Math.random() * 100) + 1; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}

console.log(arr);

function merge(left = [], right = []) {
  let leftIndex = 0;
  let rightIndex = 0;
  let newArr = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      newArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      newArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    newArr.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    newArr.push(right[rightIndex]);
    rightIndex++;
  }

  return newArr;
}

function mergeSort(arr = []) {
  if (arr.length <= 1) {
    return arr;
  }

  const MID = Math.floor(arr.length / 2);
  const LEFT = mergeSort(arr.slice(0, MID));
  const RIGHT = mergeSort(arr.slice(MID));

  return merge(LEFT, RIGHT);
}

let sortedArr = mergeSort(arr);

// 정렬한 배열을 특정 패턴으로 출력
let lineCount = 0;
let index = 0;
while (index < sortedArr.length) {
  let line = "";
  for (let i = 0; i <= lineCount; i++) {
    if (index < sortedArr.length) {
      line += sortedArr[index] + " ";
    } else {
      line += sortedArr[sortedArr.length - 1] + " ";
    }
    index++;
  }

  console.log(line);
  lineCount++;
}

console.log(`총 ${lineCount}줄`);
