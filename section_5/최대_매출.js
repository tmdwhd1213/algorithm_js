// N일 동안 매출기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하라.
function solution(n = 0, k = 0, arr = []) {
  let answer = 0;
  let left = 0;
  let right = 0;
  let sum = 0;

  // while (right < n) {
  //   // 0~k-1 까지 right로만 움직임.
  //   if (right < k) {
  //     sum += arr[right++];
  //     answer = sum;
  //   } else if (right >= k) {
  //     sum -= arr[left++];
  //     sum += arr[right++];
  //     if (sum > answer) answer = sum;
  //   }
  // }

  // 슬라이딩 윈도우 (덩어리로 움직임)
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    if (answer < sum) answer = sum;
  }
  return answer;
}

console.log(solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15])); // 56
// 11 20 25 => 56
