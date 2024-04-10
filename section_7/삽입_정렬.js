// 삽입 정렬:  j가 순회할 때 <---- 이쪽 방향으로 i-j가 작으면 교환. (--)

function solution(arr = []) {
  let answer = [...arr];
  for (let i = 1; i < answer.length; i++) {
    let cur = answer[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (answer[j] > cur) answer[j + 1] = answer[j];
      // 이미 앞에껀 정렬이 되어있으니까 현재값이 j보다 크면 break;
      else break;
    }
    answer[j + 1] = cur;
  }

  return answer;
}

console.log(solution([11, 7, 5, 6, 10, 9])); // 5 6 7 9 10 11
