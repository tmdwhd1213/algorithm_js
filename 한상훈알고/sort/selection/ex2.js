/**
 * 엘리스는 여왕을 이기기위해 포션을 먹어야 함.
 * 포션은 효과가 강한 순서대로 마셔야 함.
 * 합계가 15를 초과하면 효과가 사라짐.
 *
 * 합계가 정확히 15가 되도록 선택하여 마셔야 함.
 * 어떤 조합도 15가 될 수 없다면 '도망친다' 출력
 */

let potion = [5, 8, 6, 1, 9, 3];

function solution(potion = []) {
  // 포션을 내림차순으로 정렬
  const sortedArr = selectionSort(potion);

  // 정확히 합계가 15가 되는 조합 찾기
  for (let i = 0; i < sortedArr.length; i++) {
    let sum = 0;
    let result = [];
    for (let j = i; j < sortedArr.length; j++) {
      sum += sortedArr[j];
      result.push(sortedArr[j]);
      if (sum === 15) {
        return result;
      } else if (sum > 15) {
        break;
      }
    }
  }

  return "도망친다";
}

function selectionSort(arr = []) {
  let len = arr.length;
  // 내림차순으로 정렬
  for (let i = 0; i < len - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    // Swap
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
  }

  return arr;
}
// console.log(selectionSort(potion)); // [9,8,6,5,3,1]

console.log(solution(potion)); // [6,5,3,1]
