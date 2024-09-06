// 트럼프 카드 정리

/**
 * 카드 더미 배열(cards)을 A,2,3,4,5,6,7,8,9,10,J,Q,K 순으로 카드 정렬
 * 순서는 하트, 다이아, 클로버, 스페이드 순
 */

let cards = [
  ["Diamond", 3],
  ["Heart", "A"],
  ["Diamond", 1],
  ["Diamond", "Q"],
  ["Heart", "J"],
  ["Clover", "K"],
  ["Spade", 7],
];

function convertToPoint(card = []) {
  // A = 1, J = 11, Q = 12, K = 13
  const charToNum = {
    A: 1,
    J: 11,
    Q: 12,
    K: 13,
  };

  // 하트, 다이아, 클로버, 스페이드 순
  const CARD_AMOUNT = 13;
  const addNumForOrder = {
    Heart: CARD_AMOUNT * 0,
    Diamond: CARD_AMOUNT * 1,
    Clover: CARD_AMOUNT * 2,
    Spade: CARD_AMOUNT * 3,
  };

  return (
    addNumForOrder[card[0]] +
    (typeof card[1] === "number" ? card[1] : charToNum[card[1]])
  );
}

function bubbleSort(arr = []) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len - i; j++) {
      if (convertToPoint(arr[j - 1]) > convertToPoint(arr[j])) {
        let temp = arr[j - 1];
        [arr[j - 1], arr[j]] = [arr[j], temp];
      }
    }
  }

  return arr;
}

console.log(JSON.stringify(bubbleSort(cards)));
