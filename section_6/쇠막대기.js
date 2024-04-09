// 괄호 나오는거 대부분 스택써서 푸는 문제.
function solution(str = "") {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === "(" && str[i] === ")") {
      stack.pop();
      answer += stack.length;
    } else if (str[i] === ")") {
      stack.pop();
      // 끝나는 지점에 +1 해줘야함.
      answer += 1;
    } else stack.push(str[i]);
  }

  return answer;
}

console.log(solution("()(((()())(())()))(())")); // 17
console.log(solution("(((()(()()))(())()))(()())")); // 24
