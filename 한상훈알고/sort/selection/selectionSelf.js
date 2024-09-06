function selectionSort(arr = []) {
  // 배열에서 최소값을 찾고, 그것을 현재 위치와 스왑!
  // 반복 1 끝. 반복2에서 다시 그 짓 반복
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i; // 현재 위치를 최소값의 인덱스라고 가정
    // 현재 위치 이후의 부분에서 최소값 찾기
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j; // 새로운 최소값의 인덱스 업데이트
      }
    }
    // 최소값의 인덱스가 현재 위치와 다를 경우 스왑
    if (minIndex !== i) {
      let temp = arr[i];
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

const arr = [2, 3, 5, 1, 6, 4];
console.log(selectionSort(arr)); // [1, 2, 3, 4, 5, 6]
