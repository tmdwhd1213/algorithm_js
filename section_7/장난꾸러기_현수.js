// 키 순으로 나열해놨는데, 현수는 앞자리 앉고싶다.
// [현수번호, 현수랑 바꾼 사람 번호] 를 출력해라. -> 정렬해서 스위칭
function solution(arr = []) {
  let answer = [];
  let sortArr = [...arr].sort((a, b) => a - b);
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }

  return answer;
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));
