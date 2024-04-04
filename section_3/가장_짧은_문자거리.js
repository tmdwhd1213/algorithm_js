// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리

function solution(str = "", char = "") {
  let answer = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count = 0;
      answer.push(count);
    } else {
      count++;
      answer.push(count);
    }
  }

  count = 1;
  for (let i = answer.length - 1; i >= 0; i--) {
    if (i > 0 && answer[i - 1] > count) {
      answer[i - 1] = count;
      count++;
    } else {
      count = 1;
    }
  }

  return answer;
}

console.log(solution("teachermode", "e")); // 1 0 1 2 1 0 1 2 2 1 0
