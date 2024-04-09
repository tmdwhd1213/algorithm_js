// Queue: 선입선출(줄서기)
// 왕자: n명

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) return "Queue is Empty";
    const removedNode = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.size--;
    return removedNode.data;
  }
}

// function solution(n = 0, k = 0) {
//   let answer = 0;
//   const queue = new Queue();
//   for (let i = 1; i <= n; i++) {
//     queue.enqueue(i);
//   }
//   while (queue.size > 1) {
//     for (let i = 0; i < k - 1; i++) {
//       queue.enqueue(queue.dequeue());
//     }
//     queue.dequeue();
//     if (queue.size === 1) answer = queue.dequeue();
//   }

//   return answer;
// }

// 원형 큐가 사진으로 주어졌으니까, 배열을 원형으로 생각해서
// 지나간 것들은 맨 뒤로 옮겨주는 것 생각하기!
function solution(n, k) {
  let answer = 0;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  return answer;
}

console.log(solution(8, 3));
