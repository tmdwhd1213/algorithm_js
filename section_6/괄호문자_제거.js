// 소괄호 사이에 존재하는 모든 문자를 제거하고 남은 문자 출력.
function solution(str = "") {
  let answer = "";
  const stack = [];

  for (let x of str) {
    if (x === "(") stack.push(x);
    else if (x === ")") stack.pop();
    else if (stack.length === 0) answer += x;
  }

  return answer;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)")); // EFLM
