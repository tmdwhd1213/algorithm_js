function solution(n = 0, str = "") {
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;
  const strHash = new Map();

  for (let x of str) {
    if (!strHash.has(x)) strHash.set(x, 1);
    else strHash.set(x, strHash.get(x) + 1);
  }

  for (let [key, val] of strHash) {
    if (max < val) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

console.log(solution(15, "BACBACCACCBDEDE"));
