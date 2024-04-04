/*
  지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자
  판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 
  있는 지 알아내는 프로그램을 작성하세요. 
  격자의 가장자리는 0으로 초기화 되었다고 가정한다.
  만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.
*/

function solution(n = 0, ...matrix) {
  let answer = 0;
  // undefined면 0으로 취급
  // 내 코드
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     let left = !matrix[i - 1] ? 0 : matrix[i - 1][j] ?? 0;
  //     let right = !matrix[i + 1] ? 0 : matrix[i + 1][j] ?? 0;
  //     let up = matrix[i][j - 1] ?? 0;
  //     let down = matrix[i][j + 1] ?? 0;
  //     let curPos = matrix[i][j];
  //     if (curPos > Math.max(left, right, up, down)) answer++;
  //   }
  // }

  // dx, dy로 풀기 (2차원 그래프로 [좌,상,우,하])
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = false;
      for (let k = 0; k < dx.length; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          matrix[nx][ny] >= matrix[i][j]
        ) {
          flag = true;
          break;
        }
      }
      if (!flag) answer++;
    }
  }

  return answer;
}

console.log(
  solution(
    5,
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
  )
);
// 10
