// 바구니 하나를 만들어서 (stack) 크레인으로 뽑은 것이 만약 연속 2번이 똑같다면
// 터져서 없어짐. 바구니의 크기는 제약이 없음.
// 아무것도 없는 곳에 크레인으로 집으면 아무 일도 일어나지 않음.
// 터트려져 사라진 인형의 개수를 리턴

// 내 풀이.
// function solution(board = [], moves = []) {
//   let answer = 0;
//   const backet = new Map();

//   for (let i = 0; i < moves.length; i++) {
//     const moveIndex = moves[i] - 1;
//     let len = board[moveIndex].length;

//     if (!board[moveIndex].every((val) => val === 0)) {
//       if (board[moveIndex][len - 1] === 0) {
//         board[moveIndex].pop();
//         len--;
//       }
//       if (backet.has(board[moveIndex][len - 1])) {
//         backet.get(board[moveIndex][len - 1]) === 0
//           ? backet.delete(board[moveIndex][len - 1])
//           : backet.set(
//               board[moveIndex][len - 1],
//               backet.get(board[moveIndex][len - 1]) - 1
//             );
//         answer += 2;
//       } else {
//         backet.set(
//           board[moveIndex][len - 1],
//           (backet.get(board[moveIndex][len - 1]) || 0) + 1
//         );
//       }
//       board[moveIndex][len - 1]--;
//     }
//   }

//   return answer;
// }

function solution(board, moves) {
  let answer = 0;
  const stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let doll = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (doll === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(doll);
        break;
      }
    }
  });

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4
// _, (1, 1), (3, _, 3), _, 2 -> 4개
