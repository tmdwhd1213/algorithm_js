// n개의 숫자, m을 만드는 연속부분수열의 개수를 출력하라.

function solution(n = 0, m = 0, arr = []) {
  let answer = 0;
  let right = 0;
  let left = 0;
  let sum = 0;

  while (right < n) {
    // console.log("몇 번 도는지"); // 12번
    if (sum < m) {
      sum += arr[right++];
    } else if (sum > m) {
      sum -= arr[left++];
    } else {
      answer++;
      sum -= arr[left++];
    }
  }
  return answer;
}

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2])); // 3
//{2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}
