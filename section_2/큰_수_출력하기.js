// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작
// 성하세요.(첫 번째 수는 무조건 출력한다)

function solution(n = 0, ...rest) {
  let answer = [];

  for (let i = 0; i < rest.length - 1; i++) {
    if (i === 0) {
      answer.push(rest[i]);
      continue;
    }
    if (rest[i] < rest[i + 1]) answer.push(rest[i + 1]);
  }

  return answer;
}

console.log(solution(6, 7, 3, 9, 5, 6, 12)); // 7 9 6 12
