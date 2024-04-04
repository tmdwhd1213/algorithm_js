function solution(str = "") {
  let answer = "";

  // 원하는 문자 길이 구하는 법
  // console.log(str.match(/K/g).length);

  // O(N^2) -> 정규표현식도 O(N)을 가짐.
  // 내 코드
  // const arr = [...new Set(str)];
  // for (let x of arr) {
  //   const regEx = new RegExp(x, "g");
  //   const len = str.match(regEx).length;
  //   answer += x;
  //   if (len !== 1) {
  //     answer += len;
  //   }
  // }

  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length]) answer += str[i];
    else if (str[i] === str[i + 1]) count++;
    else {
      answer += str[i];
      if (count > 1) answer += count;
      count = 1;
    }
  }

  // Set 없이 중복 제거
  // for (let i = 0; i < str.length; i++) {
  //   i > 0 && str[i] === str[i - 1] ? (answer += "") : (answer += str[i]);
  // }

  return answer;
}

console.log(solution("KKHSSSSSSSE")); // K2HS7E
