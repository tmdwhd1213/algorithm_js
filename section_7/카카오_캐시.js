// 캐시메모리, 사이즈가 5이고 2,3,1,6,7 순이면 맨 뒤가 쓰이지 않은 작업
// Cache Miss : 새로운 작업인 5는 5,2,3,1,6이 된다. (7 삭제)
// Cache Hit : 3번을 쓴다? 5,2,3,1,6 -> 3,5,2,1,6 (3이 맨앞, 나머지 뒤로)
// job 배열을 하나씩 넣어 (shift로)
function solution(s = 0, n = 0, jobs = []) {
  let answer = Array.from({ length: s }).fill(0);

  for (let i = 0; i < n; i++) {
    let job = jobs[i];
    let idx = answer.indexOf(job);
    // Hit인 경우
    if (idx !== -1) {
      for (let j = idx - 1; j >= 0; j--) answer[j + 1] = answer[j];
    } // Miss인 경우
    else {
      for (let j = s - 2; j >= 0; j--) answer[j + 1] = answer[j];
    }
    answer[0] = job;
  }

  return answer;
}

console.log(solution(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7])); // 7 5 3 2 6
