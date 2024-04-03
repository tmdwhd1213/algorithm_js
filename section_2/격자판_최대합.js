function solution(n = 0, ...rest) {
  let answer = Number.MIN_SAFE_INTEGER;

  // // 1. 각 행의 합. 5개
  // const row = rest.map((val) => val.reduce((prev, cur) => prev + cur, 0));
  // const MAX_ROW = Math.max(...row);

  // // 2. 각 열의 합. 5개
  // const col = rest.reduce((prev, cur) => {
  //   let tempArr = [];
  //   for (let i = 0; i < n; i++) {
  //     let temp = prev[i] + cur[i];
  //     tempArr.push(temp);
  //   }

  //   return tempArr;
  // });
  // const MAX_COL = Math.max(...col);

  // // 3. 대각선의 합. 2개
  // const diagonalMain = rest.reduce((prev, cur, idx) => prev + cur[idx], 0);

  // const diagonalSub = rest.reduce(
  //   (prev, cur, idx) => prev + cur[n - 1 - idx],
  //   0
  // );

  // // 최종 MAX 구하기.
  // answer = Math.max(MAX_ROW, MAX_COL, diagonalMain, diagonalSub);

  for (let i = 0; i < n; i++) {
    let row = 0;
    let col = 0;
    for (let j = 0; j < n; j++) {
      row += rest[i][j];
      col += rest[j][i];
    }
    answer = Math.max(answer, row, col);
  }

  let mainDia = 0;
  let subDia = 0;

  for (let i = 0; i < n; i++) {
    mainDia += rest[i][i];
    subDia += rest[i][n - 1 - i];
  }

  answer = Math.max(answer, mainDia, subDia);

  return answer;
}

console.log(
  solution(
    5,
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
  )
);
// 155
