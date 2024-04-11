// n개의 평명사으이 좌표(x,y)가 주어지면 모든 좌표를 오름차순으로 정렬하라.
// 기준은 먼저 x값에 의해 정렬하고, x가 같으면 y에 의해 정렬
function solution(n = 0, ...axises) {
  const answer = axises;
  // 삽입 정렬
  for (let i = 1; i < n; i++) {
    let cur = axises[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      // || 이후에는 x좌표가 같을 경우에만
      if (axises[j][0] > cur[0] || axises[j][0] === cur[0])
        axises[j + 1] = axises[j];
      else break;
    }
    axises[j + 1] = cur;
  }

  return JSON.stringify(answer);
}

console.log(solution(5, [2, 7], [1, 3], [1, 2], [2, 5], [3, 6]));
