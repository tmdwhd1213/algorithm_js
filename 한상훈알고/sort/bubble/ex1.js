let scores = [
  { name: "철수", score: 85 },
  { name: "영희", score: 92 },
  { name: "민수", score: 88 },
  { name: "혜진", score: 97 },
  { name: "진수", score: 90 },
];

// 학생 점수가 높은 순서로 객체 배열의 순서를 변경하여 반환
function solution(arr = [{ name: "", score: 0 }]) {
  const len = arr.length;

  // for (i = len - 1; i >= 0; i--) {
  //   for (j = 1; j <= i; j++) {
  //     if (arr[j - 1].score < arr[j].score) {
  //       let temp = arr[j - 1];
  //       [arr[j - 1], arr[j]] = [arr[j], temp];
  //     }
  //   }
  // }

  for (i = 0; i < len; i++) {
    for (j = 1; j <= i; j++) {
      if (j + 1 < len && arr[j - 1].score < arr[j].score) {
        let temp = arr[j];
        [arr[j - 1], arr[j]] = [arr[j], temp];
      }
    }
  }

  return arr;
}

console.log(JSON.stringify(solution(scores))); // [{"name":"혜진","score":97},{"name":"영희","score":92},{"name":"진수","score":90},{"name":"민수","score":88},{"name":"철수","score":85}]
