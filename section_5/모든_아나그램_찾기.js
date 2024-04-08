// 부분집합이 되는 아나그램의 개수를 출력하라.
// 윈도우슬라이딩으로 풀어보자.

// 내 풀이
// function solution(S = "", T = "") {
//   let answer = 0;
//   let left = 0;

//   let sHash = new Map();
//   let tHash = new Map();
//   let tLen = T.length - 1;

//   for (let x of T) tHash.has(x) ? tHash.set(tHash.get(x), 1) : tHash.set(x, 1);

//   for (let i = 0; i < tLen; i++)
//     sHash.has(S[i]) ? sHash.set(sHash.get(S[i]), 1) : sHash.set(S[i], 1);

//   for (let right = tLen; right < S.length; right++) {
//     sHash.has(S[right])
//       ? sHash.set(S[right], sHash.get(S[right]) + 1)
//       : sHash.set(S[right], 1);
//     if (sHash.size === tHash.size && isAnagram(sHash, tHash)) answer++;

//     sHash.set(S[left], sHash.get(S[left]) - 1);
//     sHash.get(S[left]) === 0 ? sHash.delete(S[left++]) : left++;
//   }

//   return answer;
// }

// function isAnagram(sHash = new Map(), tHash = new Map()) {
//   for (let [key, value] of sHash) {
//     if (!tHash.has(key) || tHash.get(key) !== value) return false;
//   }

//   return true;
// }

// console.log(solution("bacaAacba", "abc"));

function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  // t 전부를 sH에 넣어놓고
  for (let x of t) {
    sH.set(x, (sH.get(x) || 0) - 1);
  }
  let len = t.length - 1;
  // sH
  for (let i = 0; i < len; i++) {
    sH.set(s[i], (sH.get(s[i]) || 0) + 1);
    if (sH.get(s[i]) === 0) sH.delete(s[i]);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    sH.set(s[rt], (sH.get(s[rt]) || 0) + 1);
    if (sH.get(s[rt]) === 0) sH.delete(s[rt]);
    if (sH.size === 0) answer++;
    sH.set(s[lt], (sH.get(s[lt]) || 0) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
console.log(solution("bacacbcba", "abc"));
