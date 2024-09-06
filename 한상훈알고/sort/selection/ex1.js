/**
 * 1. 금메달이 많은 순서대로
 * 2. 만약 금메달의 숫자가 같다면 은메달의 숫자가 많은 순서대로
 * 3. 만약 은메달이 숫자도 같다면 동메달의 숫자가 많은 순서대로
 * 4. 동메달의 숫자까지 같다면, 참여한 게임이 적은 순서대로 정렬
 */

let countries = [
  { country: "Korea", gold: 5, silver: 4, bronze: 2, games: 10 },
  { country: "USA", gold: 5, silver: 3, bronze: 2, games: 9 },
  { country: "Japan", gold: 5, silver: 2, bronze: 4, games: 11 },
  { country: "China", gold: 5, silver: 2, bronze: 2, games: 12 },
  { country: "Germany", gold: 4, silver: 3, bronze: 3, games: 9 },
];

function rankCountries(countries = []) {
  let len = countries.length;
  for (let i = 0; i < len; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < len; j++) {
      // 금메달 비교
      if (countries[j].gold > countries[maxIndex].gold) {
        maxIndex = j;
        continue;
      }

      // 은메달 비교
      if (
        countries[j].gold === countries[maxIndex].gold &&
        countries[j].silver > countries[maxIndex].silver
      ) {
        maxIndex = j;
        continue;
      }

      // 동메달 비교
      if (
        countries[j].gold === countries[maxIndex].gold &&
        countries[j].silver === countries[maxIndex].silver &&
        countries[j].bronze > countries[maxIndex].bronze
      ) {
        maxIndex = j;
        continue;
      }

      // 게임 수 비교
      if (
        countries[j].gold === countries[maxIndex].gold &&
        countries[j].silver === countries[maxIndex].silver &&
        countries[j].bronze === countries[maxIndex].bronze &&
        countries[j].games < countries[maxIndex].games
      ) {
        maxIndex = j;
      }
    }
    if (maxIndex !== i) {
      let temp = countries[i];
      [countries[i], countries[maxIndex]] = [countries[maxIndex], temp];
    }
  }

  return countries;
}

console.log(JSON.stringify(rankCountries(countries)));
