function bubbleSort(array = []) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        const temp = array[j];
        array[i] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
}

// 버블sort: 맨 앞 원소부터 바로 다음 원소와 비교하고, 앞이 더 크면 swap!
// Array.method로 구현해보기
function bubbleSortWithMethod(array = []) {
  // 포인터가 총 두개,
  array.forEach((_) =>
    // e2는 임시값, 즉 temp
    array.forEach((e2, i) => {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], e2];
      }
    })
  );
  return array;
}

let arr = [5, 3, 8, 4, 2];
console.log(bubbleSortWithMethod(arr)); // [2, 3, 4, 5, 8]
