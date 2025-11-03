class MinHeap {
  constructor() {
    this.list = [];
  }

  add(val) {
    this.list.push(val);
    let idx = this.list.length - 1;
    let me = this.list[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (me < this.list[parentIdx]) {
        this.list[idx] = this.list[parentIdx];
        this.list[parentIdx] = me;
        idx = parentIdx;
      } else break;
    }
  }

  delete() {
    if (this.list.length === 0) return undefined;
    if (this.list.length === 1) return this.list.pop();

    const min = this.list[0];

    this.list[0] = this.list.pop();
    let idx = 0;
    const length = this.list.length;

    while (true) {
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;
      let smallest = idx;

      if (leftIdx < length && this.list[leftIdx] < this.list[smallest])
        smallest = leftIdx;
      if (rightIdx < length && this.list[rightIdx] < this.list[smallest])
        smallest = rightIdx;

      if (smallest === idx) break;

      // swap
      [this.list[idx], this.list[smallest]] = [
        this.list[smallest],
        this.list[idx],
      ];
      idx = smallest;
    }

    return min;
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  for (let i of scoville) heap.add(i);

  let count = 0;

  while (heap.list.length > 1 && heap.list[0] < K) {
    const first = heap.delete();
    const second = heap.delete();
    heap.add(first + second * 2);
    count++;
  }

  return heap.list[0] >= K ? count : -1;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
