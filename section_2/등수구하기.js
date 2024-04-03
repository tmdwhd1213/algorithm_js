// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는
// 프로그램을 작성하세요.

function solution(n = 0, arr = []) {
  let answer = [];
  // 내 정답
  // const sortedArr = [...arr].sort((a, b) => b - a);
  // answer = arr.map((val) => sortedArr.indexOf(val) + 1);

  for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) count++;
    }
    answer.push(count);
  }
  return answer;
}

console.log(solution(5, [76, 92, 92, 100, 76])); // 4 2 2 1 4
