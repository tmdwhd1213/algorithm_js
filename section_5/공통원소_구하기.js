function solution(nArr = [], mArr = []) {
  let answer = [];
  let n = nArr.length;
  let m = mArr.length;
  let p1 = 0;
  let p2 = 0;

  nArr.sort((a, b) => a - b);
  mArr.sort((a, b) => a - b);
  while (p1 < n && p2 < m) {
    if (nArr[p1] === mArr[p2]) {
      answer.push(nArr[p1++]);
      p2++;
    } else if (nArr[p1] < mArr[p2]) p1++;
    else p2++;
  }

  return answer;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8])); // 2 3 5
