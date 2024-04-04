// 알파벳 이외의 문자들은 없애고, 회문이 맞으면 YES 아니면 NO
function solution(str = "") {
  let answer = "YES";
  // 내 풀이
  // str = str.toLocaleLowerCase();
  // // console.log("a".charCodeAt(), "z".charCodeAt()); // 97, 122
  // const arr = str.split("");
  // const filteredArr = arr.filter(
  //   (val) => val.charCodeAt() >= 97 && val.charCodeAt() <= 122
  // );

  // const len = filteredArr.length;

  // for (let i = 0; i < Math.floor(len / 2); i++) {
  //   if (filteredArr[i] !== filteredArr[len - 1 - i]) return "NO";
  // }

  // ^ 부정 따라서 문자열의 글로벌(전체)에 소문자가 아닌 것들을 빈 문자열로 치환하겠다.
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  const len = str.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) return "NO";
  }

  return answer;
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
