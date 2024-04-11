// 그리디 (탐욕)
// 시간이 겹치지 않는 회의 수를 최대한 많이 찾아라.
// 1. 종료시간이 가장 빠른 것으로 정렬. (종료시간이 같은데 시작시간이 다르면 앞 인덱스만 뽑아오기.)
// 2. 선택된 종료시간보다 같거나 큰(<=) 시작시간을 가진 친구중에 종료시간이 가장 빠른 것 구하기.
// 반복
function solution(n = 0, ...arrs) {
  let answer = 0;
  let endTime = 0;
  insertSort(n, arrs);
  // sort 메서드 써서 종료시간 순으로 나열하고 종료시간이 같으면 시작시간으로 나열하는 방법
  // arrs.sort((a, b) => {
  //   if (a[1] === b[1]) return a[0] - b[0];
  //   else return a[1] - b[1];
  // });

  for (let x of arrs) {
    if (x[0] >= endTime) {
      answer++;
      endTime = x[1];
    }
  }
  return answer;
}

console.log(solution(5, [1, 4], [2, 3], [3, 5], [4, 6], [5, 7])); // 3
// (2,3), (3,5), (5,7)
console.log(solution(3, [3, 3], [1, 3], [2, 3]));

function insertSort(n, arrs) {
  for (let i = 1; i < n; i++) {
    let cur = arrs[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arrs[j][1] > cur[1] || (arrs[j][1] === cur[1] && arrs[j][0] > cur[0]))
        arrs[j + 1] = arrs[j];
      else break;
    }
    arrs[j + 1] = cur;
  }
  return arrs;
}
