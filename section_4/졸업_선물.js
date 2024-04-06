function solution(m = 0, arr = []) {
  let answer = 0;
  const n = arr.length;
  const products = [];
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  // console.log(JSON.stringify(arr));

  // 물품 중 비싼걸 찾기 위해.
  for (let i = 0; i < n; i++) {
    products.push(arr[i][0]);
  }
  // 비싼 물품.
  let max = Math.max(...products);

  for (let i = 0; i < n; i++) {
    const sum = [];

    for (let j = 0; j < n; j++) {
      let product = arr[j][0];
      const shipping = arr[j][1];
      if (product === max) product /= 2;
      sum.push(product + shipping);
    }
    if (m >= sum[i]) {
      m -= sum[i];
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
); // 답 : 4

// 4 (2,2),(4,3),(4,5),(10,3) -> 10 할인 받아서 (5,3) 4+7+9+8 = 28;
// 물품 중 한개만 할인 가능, 배송비 할인 X (물품, 배송비)
