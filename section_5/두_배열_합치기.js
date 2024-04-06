// 두 배열 합치고 오름차순으로 정렬
// 투 포인터 알고리즘
function solution(n, nArr = [], m, mArr = []) {
  let answer = [];
  // 내 풀이 sort()메서드는 O(NlogN)의 시간 복잡도를 가짐
  // answer.push(nArr, mArr);
  // answer = answer.flat().sort((a, b) => a - b);

  // 포인터 두개 설정
  let p1 = 0;
  let p2 = 0;
  while (p1 < n && p2 < m) {
    if (nArr[p1] <= mArr[p2]) answer.push(nArr[p1++]);
    else answer.push(mArr[p2++]);
  }

  while (p1 < n) answer.push(nArr[p1++]);
  while (p2 < m) answer.push(mArr[p2++]);

  return answer;
}

console.log(solution(3, [1, 3, 5], 5, [2, 3, 6, 7, 9]));
