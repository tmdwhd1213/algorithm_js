function insertionSort(arr = []) {
  // 배열의 두 번째 원소부터 시작해 각 원소를 적절한 위치에 삽입.
  // 현재 원소를 적절한 위치에 삽입하기 위해, 현재 원소보다
  // 큰 원소들을 오른쪽으로 이동시킴.
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]; // 현재 원소를 저장
    let j = i - 1; // 정렬된 부분 배열의 마지막 인덱스

    // 현재 원소보다 큰 원소들을 오른쪽으로 이동
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j]; // 원소를 오른쪽으로 이동
      j--; // 이전 인덱스로 이동
    }
    arr[j + 1] = currentValue; // 현재 원소를 적절한 위치에 삽입
  }

  return arr;
}

const arr = [6, 2, 1, 5, 3, 4];
console.log(insertionSort(arr)); // [1, 2, 3, 4, 5, 6]
