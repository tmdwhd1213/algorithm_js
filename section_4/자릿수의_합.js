// 자릿수끼리의 합이 제일 많은 것을 출력.
// 같은 경우 원래 숫자가 더 높은 쪽을 출력

function solution(n = 0, arr = []) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  const splitNums = arr.map((val) => (val + "").split(""));
  for (let i = 0; i < splitNums.length; i++) {
    const temp = splitNums[i].reduce((prev, cur) => prev + +cur, 0);
    if (temp > max) {
      max = temp;
      answer = arr[i];
    } else if (temp === max) answer = arr[i];
  }

  return answer;
}

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123])); // 137
