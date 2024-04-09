// 필수과목은 꼭 순서대로 들어야함.
// 만약 총 과목이 A, B, C, D, E, F, G가 있고, 여기서 필수과목이 CBA로 주어지면 필수과목은
// C, B, A과목이며 이 순서대로 꼭 수업계획을 짜야 합니다
//
function solution(ps = "", subject = "") {
  let answer = "YES";
  const queue = ps.split("");

  for (let i = 0; i < subject.length; i++) {
    if (queue.indexOf(subject[i]) === 0) queue.shift();
    else if (queue.indexOf(subject[i]) > 0) return "NO";
  }

  // for 문이 다 돌았음에도 queue에 남아있으면 NO
  if (queue.length) return "NO";

  return answer;
}

console.log(solution("CBA", "CBDAGE")); // YES
