function merge(left = [], right = []) {
  // 각각 첫번째 원소들을 비교해서 작은거 새로운 배열에 푸쉬
  let newArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      newArr.push(left[leftIndex++]);
    } else {
      newArr.push(right[rightIndex++]);
    }
  }

  // 위에서 한쪽이 남은 경우 둘 중 한가지 while문을 돌 것임.
  // 이미 정렬된 배열이므로 바로 넣어주기
  while (leftIndex < left.length) {
    newArr.push(left[leftIndex++]);
  }

  while (rightIndex < right.length) {
    newArr.push(right[rightIndex++]);
  }

  return newArr;
}

function mergeSort(arr = []) {
  // 원소가 하나가 남을 때까지 재귀호출
  // 만약 1개보다 작거나 같으면 arr를 리턴
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // 콜스택 1. left:[3,7,2], right:[4,6,5,1]
  // left.length가 아직 3이므로 다시 재귀.
  // 콜스택2. left: [3], right:[7,2] -> 맨 위 if문에 걸림 따라서. divideLeft에 [3]이 할당.
  // divideRight는 [7,2]이므로 재귀실행.
  // 콜스택3. left:[7], right:[2]
  // 콜스택3에서의 divideLeft는 [7], divideRight는 [2]이다.
  // 마지막 함수 리턴에서 merge함수 호출
  const divideLeft = mergeSort(left); // 한개까지 자르고 남은것을 리턴
  const divideRight = mergeSort(right);

  return merge(divideLeft, divideRight); // 1. [2,7] 반환 콜스택3 끝.
  // 2. [3], [2,7]이랑 비교해서 merge() 리턴값 [2,3,7] 콜스택2 끝.
  // 3. 콜스택1에서는 divideLeft가 드디어 끝나고 [2,3,7]로 정렬됨.
  // 4. divideRight의 정렬 반복.
  // 5. divideLeft, divideRight 정렬이 완성된 배열들을 merge한 배열을 리턴.
}

const arr = [3, 7, 2, 4, 6, 5, 1];
console.log(mergeSort(arr));
