function CustomArr() {
  this.length = 0;
  this.data = {};

  this.push = function (item) {
    this.data[this.length] = item;
    this.length++;
  };
}

CustomArr.prototype.forEach = function (predicate = () => {}, thisArg) {
  for (let i = 0; i < this.length; i++) {
    predicate.call(thisArg, this.data[i], i, this);
  }
};

//map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
CustomArr.prototype.map = function (callbackfn, thisArg) {
  if (typeof callbackfn !== "function")
    throw new Error("첫번째 인자에 콜백함수를 넘겨주세요.");

  const newArr = new CustomArr();
  for (let i = 0; i < this.length; i++) {
    newArr.push(callbackfn(this.data[i], i, this));
  }
  return newArr.data;
};

//filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
/**
 *
 * @param { (value: string | number, index: number, array: []) => [] } predicate
 * @param {*} thisArg
 */
CustomArr.prototype.filter = function (predicate, thisArg) {
  if (typeof predicate !== "function")
    throw new Error("첫번째 인자에 콜백함수를 넘겨주세요.");

  const newArr = new CustomArr();
  for (let i = 0; i < this.length; i++) {
    if (predicate.call(thisArg, this.data[i], i, this)) {
      newArr.push(this.data[i]);
    }
  }
  return newArr.data;
};

//reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
/**
 *
 * @param {(previousValue: string | number, currentValue: string | number, currentIndex: number, array: []) => string | number} callbackfn
 * @param {string | number} initialValue
 * @returns {string | number}
 */
CustomArr.prototype.reduce = function (callbackfn, initialValue) {
  if (typeof callbackfn !== "function")
    throw new Error("첫번째 인자에 콜백함수를 넘겨주세요.");

  if (this.length === 0 && initialValue === undefined)
    throw new TypeError("배열이 비어있는데 초기값이 제공되지 않았습니다.");

  let accumulator = initialValue !== undefined ? initialValue : this.data[0];
  let startingIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startingIndex; i < this.length; i++) {
    accumulator = callbackfn(accumulator, this.data[i], i, this);
  }

  return accumulator;
};

const arr = new CustomArr();
arr.push(1);
arr.push(2);
arr.push(3);

arr.forEach(
  function (ele, idx, arr) {
    console.log(
      `${ele}, ${idx}, ${JSON.stringify(arr)} ${JSON.stringify(this)}`
    );
  },
  [10, 20]
);

const mappedArr = arr.map((val) => val * 2);

console.log(mappedArr);

const filteredArr = arr.filter((val) => val === 2);
console.log(filteredArr);

const reduceArr = arr.reduce((prev, cur) => {
  return prev + cur;
});
console.log(reduceArr);
