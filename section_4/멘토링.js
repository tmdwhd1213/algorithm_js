// M번의 수학테스트, N명의 학생, index + 1 -> 등 수
// M번의 테스트를 거쳐 모든 테스트에서 성적이 좋은 학생이 멘토가 될 수 있다.
// 멘토, 멘티 쌍의 개수를 구하라.
function solution(N, M, testResults) {
  let answer = [];

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      let mentor = i;
      let mentee = j;
      let mentorScore = 0;

      if (i === j) continue; // 멘토, 멘티가 같은 사람이 될 수 없다.
      for (let k = 0; k < M; k++) {
        // 등수 === 인덱스
        if (testResults[k].indexOf(mentor) < testResults[k].indexOf(mentee))
          mentorScore++;
      }

      if (mentorScore === M) answer.push({ mentor, mentee });
    }
  }
  return answer;
}

console.log(
  JSON.stringify(
    solution(4, 3, [
      [3, 4, 1, 2],
      [4, 3, 2, 1],
      [3, 1, 4, 2],
    ])
  )
);

// let te = {};
// let foo = ["키", "나"];
// te.key = "value";
// te[`${foo[0]}`] = "벨류";
// console.log(te);
// console.log("412".includes(3));
