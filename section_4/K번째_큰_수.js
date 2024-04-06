// 1~100 자연수가 적힌 N장의 카드. 같은 숫자가 있을 수 있다.
// 3장을 뽑아 숫자의 합을 기록하려함.
// 3장을 뽑을 수 있는 모든 경우 (브루트포스)
// 기록한 값 중 K번째로 큰 수를 출력하라.
// 만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고
// K값이 3이라면 K번째 큰 값은 22입니다. (중복제거)

function solution(n = 0, k = 0, cards = []) {
  let answer = -1;
  let temp = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let s = j + 1; s < n; s++) {
        let sum = cards[i] + cards[j] + cards[s];
        if (!temp.includes(sum)) temp.push(sum);
      }
    }
  }
  temp.sort((a, b) => b - a);
  if (temp.length >= k) {
    answer = temp[k - 1];
  }

  return answer;
}

console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42])); // 143
