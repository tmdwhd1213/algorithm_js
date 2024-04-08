// postfix -> 연산자가 나오기 전까지 숫자는 스택에 다 담고
// 연산자를 만나면 pop()한 숫자랑 그 다음 숫자랑 연산.
function solution(str = "") {
  let answer = 0;
  const stack = [];
  // console.log("1".charCodeAt(), "9".charCodeAt());
  for (let x of str) {
    // 숫자 걸러낼 때 isNaN(!x) 이게 더 편한듯.
    if (x.charCodeAt() >= 49 && x.charCodeAt() <= 57) stack.push(Number(x));
    else {
      switch (x) {
        case "+":
          stack[stack.length - 2] += stack.pop();
          break;
        case "-":
          stack[stack.length - 2] -= stack.pop();
          break;
        case "*":
          stack[stack.length - 2] *= stack.pop();
          break;
        case "/":
          stack[stack.length - 2] /= stack.pop();
          break;
      }
    }
  }
  answer = stack[0];

  return answer;
}

console.log(solution("352+*9-")); // 12
// 3*(5+2)-9
