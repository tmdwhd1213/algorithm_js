// 버블정렬: 자신과 자신+1하고 비교하여 본인이 크면 자리를 바꾸고 뒤로 계속 보냄.
function solution(arr = []) {
  let answer = [...arr];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (answer[j] > answer[j + 1])
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
    }
  }
  return answer;
}

console.log(solution([13, 5, 11, 7, 23, 15])); // 5,7,11,13,15,23
