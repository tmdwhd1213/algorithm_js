// 피로연을 장소를 빌려 3일간 쉬지 않고 하려고함.
// 0시 ~ 72시간 음이 아닌 정수
// 만약 한 친구가 오는 시간 13, 가는시간 15라면 이 친구는 13시 정각에 피로연 장에 존재하는
// 것이고 15시 정각에는 존재하지 않는다고 가정합니다.
// 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 출력.

function solution(n, ...arrs) {
  let answer = Number.MIN_SAFE_INTEGER;
  let cnt = 0;
  const timeLine = arrs
    .map((val) => {
      return [
        [val[0], "S"],
        [val[1], "E"],
      ];
    })
    .flat();

  timeLine.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    // 첫 번째 요소가 같은 경우
    // 'E'가 'S'보다 우선순위가 높으므로 'E'를 앞에 배치
    else if (a[1] === "E" && b[1] === "S") return -1;
  });

  timeLine.forEach((ele) => {
    ele[1] === "S" ? cnt++ : cnt--;
    if (answer < cnt) answer = cnt;
  });

  return answer;
}

console.log(solution(5, [14, 18], [12, 15], [15, 20], [20, 30], [5, 14])); // 2
// (14, 18), (12, 15)
// (14, 18), (15, 20)

/** sort 메서드
 * 비교 함수가 양수를 반환하면 첫 번째 요소가 두 번째 요소보다 뒤에 위치하도록 정렬됩니다.
   비교 함수가 음수를 반환하면 첫 번째 요소가 두 번째 요소보다 앞에 위치하도록 정렬됩니다.
   비교 함수가 0을 반환하면 두 요소의 순서는 변경되지 않습니다.
 */
