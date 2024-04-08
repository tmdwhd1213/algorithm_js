// 아나그램 -> 알파벳 순서가 달라도 몇개가 쓰였는지, 같은게 쓰였는지가 일치하는 것.
// 같은게 쓰였는지, 몇개가 쓰였는지 -> 해쉬맵
// 길이가 같은 두 개의 단어가 주어지면
function solution(str1 = "", str2 = "") {
  let answer = "YES";

  let strHash = new Map();

  for (let x of str1) {
    if (!strHash.has(x)) strHash.set(x, 1);
    else strHash.set(x, strHash.get(x) + 1);
  }
  for (let y of str2) {
    if (!strHash.has(y) || strHash.get(y) === 0) return "NO";
    strHash.set(y, strHash.get(y) - 1);
  }

  return answer;
}

console.log(solution("AbaAeCe", "baeeACA"));
