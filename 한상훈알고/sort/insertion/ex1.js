/**
 * 삽입 정렬을 사용해 공격력이 높은 유닛이 아래로 오도록 오름차순 정렬
 */

let units = [
  { name: "질럿", attack: 16 },
  { name: "드라군", attack: 20 },
  { name: "하이템플러", attack: 0 },
  { name: "다크템플러", attack: 40 },
  { name: "리버", attack: 100 },
  { name: "아칸", attack: 30 },
];

function insertionSort(arr = [{ name, attack }]) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j].attack > currentValue.attack) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}

console.log(JSON.stringify(insertionSort(units)));
