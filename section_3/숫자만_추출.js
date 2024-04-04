// 숫자만 추출, 순서대로 자연수 만들기. 0208 -> 208로

function solution(str = "") {
  let answer = 0;

  // 내 풀이
  // str = str.replace(/[^0-9]/g, "");
  // answer = parseInt(str);

  // isNaN 사용해서 숫자만 뽑아내기
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + +x;
  }

  return answer;
}

console.log(solution("g0en2T0s8eSoft")); // 208
