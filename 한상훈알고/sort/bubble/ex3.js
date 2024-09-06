// 배달 앱의 추천 알고리즘

/**
 * 총주문 수
 * 평균 평점
 * 누적 '좋아요' 수
 * 사용자와의 거리(km)
 */

// 총점이 가장 높은 순위부터 내림차순으로 정렬.
// 만약 점수가 높더라도 사용자와의 거리가 20km 이상 멀리 있는 곳이라면 추천X

let restaurants = [
  {
    name: "음식점A",
    totalOrders: 300,
    avgRating: 4.5,
    likes: 200,
    distance: 5,
  },
  {
    name: "음식점B",
    totalOrders: 250,
    avgRating: 4.2,
    likes: 180,
    distance: 25,
  },
  {
    name: "음식점C",
    totalOrders: 400,
    avgRating: 4.7,
    likes: 250,
    distance: 15,
  },
  {
    name: "음식점D",
    totalOrders: 200,
    avgRating: 4.1,
    likes: 150,
    distance: 30,
  },
  {
    name: "음식점E",
    totalOrders: 350,
    avgRating: 4.4,
    likes: 220,
    distance: 10,
  },
];
const weights = { totalOrders: 0.2, avgRating: 0.3, likes: 0.2, distance: 0.3 };

function calculateScore({ totalOrders, avgRating, likes, distance }) {
  // 20km 넘으면 목록에서 제외
  const MAX_DISTANCE = 20;
  if (distance >= MAX_DISTANCE) {
    return null;
  }

  // 가중치를 곱해서 총점을 부여
  let score =
    weights.totalOrders * totalOrders +
    weights.avgRating * avgRating +
    weights.likes * likes +
    weights.distance * (MAX_DISTANCE - distance);

  return score;
}

function bubbleSort(arr = []) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len - i; j++) {
      if (calculateScore(arr[j - 1]) < calculateScore(arr[j])) {
        let temp = arr[j - 1];
        [arr[j - 1], arr[j]] = [arr[j], temp];
      }
    }
  }

  return arr;
}

console.log(JSON.stringify(bubbleSort(restaurants)));
