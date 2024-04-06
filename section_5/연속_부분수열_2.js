// n개의 수, m이하 연속 부분수열의 합 1개도 ㄱㅊ

function solution(n = 0, m = 0, arr = []) {
  let answer = 0;
  // let right = 1;
  // let left = 0;
  // let sum = arr[left];

  // // 원소가 한 개일 때
  // for (let x of arr) {
  //   if (x <= m) answer++;
  // }
  // while (right < n) {
  //   console.log("혼자 품");
  //   if (sum < m) {
  //     answer++;
  //     sum += arr[right++];
  //   } else if (sum > m) {
  //     sum -= arr[left++];
  //   } else {
  //     answer++;
  //     sum -= arr[left++];
  //   }
  // }

  let left = 0;
  let sum = 0;

  for (let right = 0; right < n; right++) {
    sum += arr[right];

    while (sum > m) {
      sum -= arr[left++];
    }
    answer += right - left + 1;
  }

  return answer;
}

console.log(solution(5, 5, [1, 1, 1, 1, 1])); // 10
// {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지
