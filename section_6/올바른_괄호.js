function solution(str = "") {
  let answer = "YES";
  let stack = [];

  for (let x of str) {
    if (x === "(") stack.push(x);
    else if (x === ")") {
      // ')'가 더 많은 경우
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  // 짝이 안 맞아서 '('가 남아있는 경우
  if (stack.length) return "NO";
  return answer;
}

console.log(solution(")("));
