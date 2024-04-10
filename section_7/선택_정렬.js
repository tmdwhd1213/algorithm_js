// 선택 정렬 -> 오름차순

function solution(n = 0, arr = []) {
  let answer = [...arr];

  for (let i = 0; i < answer.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[j] < answer[idx]) idx = j;
    }
    [answer[i], answer[idx]] = [answer[idx], answer[i]];
  }

  return answer;
}

console.log(solution(6, [13, 5, 11, 7, 23, 15]));
// 5 7 11 13 15 23
