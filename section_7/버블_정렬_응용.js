// 음의 정수, 양의 정수로 나누되, 순서는 바뀌지 않아야 함.
// 버블정렬로 구현해봐라
// 버블은 현재, 뒤에 비교해서 뒤에 쌓는 느낌.
// 맨 뒤 원소는 루프 안 돌려도 됨
// 이중 루프는 i 뒷 원소시작, j가 끝나고 i가 끝날때 뒤에 쌓이니까 -i씩 줄어들겠지

function solution(arr = []) {
  let answer = [...arr];
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - i - 1; j++) {
      if (answer[j] > 0 && answer[j + 1] < 0)
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
// -3 -2 -6 1 2 3 5 6
