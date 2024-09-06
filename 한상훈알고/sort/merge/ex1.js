// 뮤지컬 vip

// 평소에는 줄 서서 오픈런 해야함.
// 이번엔 VIP만 특별히 미리 지정좌석을 주게 할 것.
// VIP들이 원하는 좌석을 받아, 새로운 배열에 저장하고
// 공연 시작 전에 이 배열을 정렬해야 함.

const VIP_SEATS = ["D5", "A7", "B3", "A1", "D4", "B1", "A2", "D1", "C1", "C5"];

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
  // 재귀호출 종결 조건문
  if (arr.length <= 1) {
    return arr;
  }

  const MID = Math.floor(arr.length / 2);
  const LEFT = mergeSort(arr.slice(0, MID));
  const RIGHT = mergeSort(arr.slice(MID));

  return merge(LEFT, RIGHT);
}

console.log(mergeSort(VIP_SEATS));
