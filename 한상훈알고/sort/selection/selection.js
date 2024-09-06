// 선택 정렬
/**
 * 맨 아래부터 쌓아감
 * 배열을 한 바퀴돌고 가장 작은 값을 0번 인덱스로 swap!
 * 그 다음은 0번을 제외한(이미 정렬된) 원소부터 한 바퀴돌고 최소값을 1번 인덱스로 swap!
 */

function selectionSort(arr = []) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    [arr[i], arr[minIndex]] = [arr[minIndex], temp];
  }

  return arr;
}

const arr = [3, 1, 6, 2, 4, 5];
console.log(selectionSort(arr));
