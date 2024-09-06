function bubbleSort(arr = []) {
  // 인접한 두 원소를 비교하여 왼쪽이 더 크면 오른쪽과 스왑
  // 뒤에 차곡차곡 쌓는 느낌
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        [arr[j - 1], arr[j]] = [arr[j], temp];
      }
    }
  }

  return arr;
}

const arr = [3, 2, 5, 1, 6, 4];

console.log(bubbleSort(arr)); // [1,2,3,4,5,6]
