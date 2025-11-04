class PriorityQueue {
  constructor() {
    this.value = [];
  }

  insert(value) {
    this.value.push(value);
    let idx = this.value.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      if (compare(this.value[idx], this.value[parentIdx])) {
        [this.value[idx], this.value[parentIdx]] = [
          this.value[parentIdx],
          this.value[idx],
        ];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  remove() {
    const removeValue = this.value[0];
    let last = this.value.pop();

    if (this.value.length === 0) {
      return removeValue;
    }

    this.value[0] = last;
    let length = this.value.length;
    let idx = 0;
    let leftIdx, rightIdx;

    while (1) {
      let moreBigIdx = null;
      leftIdx = idx * 2 + 1;
      rightIdx = idx * 2 + 2;

      if (leftIdx < length) {
        if (compare(this.value[leftIdx], this.value[idx])) {
          moreBigIdx = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (compare(this.value[rightIdx], this.value[idx])) {
          if (compare(this.value[rightIdx], this.value[leftIdx])) {
            moreBigIdx = rightIdx;
          }
        }
      }

      if (moreBigIdx === null) break;

      [this.value[idx], this.value[moreBigIdx]] = [
        this.value[moreBigIdx],
        this.value[idx],
      ];

      idx = moreBigIdx;
    }

    return removeValue;
  }

  isEmpty() {
    return this.value.length === 0;
  }
}

function compare(val1, val2) {
  const [number1, start1, consume1] = val1;
  const [number2, start2, consume2] = val2;

  if (consume1 < consume2) return true;

  if (consume1 === consume2) {
    if (start1 < start2) return true;

    if (start1 === start2) {
      if (number1 < number2) return true;
    }
  }

  return false;
}

function solution(jobs) {
  const queue = new PriorityQueue();
  jobs = jobs.map((job, i) => [i, ...job]).sort((a, b) => a[1] - b[1]);

  let currentTime = 0;
  let totalTurnaroundTime = 0;
  let jobIndex = 0;
  let length = jobs.length;

  while (jobIndex < length || !queue.isEmpty()) {
    while (jobIndex < length && jobs[jobIndex][1] <= currentTime) {
      queue.insert(jobs[jobIndex]);
      jobIndex++;
    }

    if (queue.isEmpty()) {
      currentTime = jobs[jobIndex][1];
      continue;
    }

    const [number, requestTime, duration] = queue.remove();
    currentTime += duration;
    totalTurnaroundTime += currentTime - requestTime;
  }

  return Math.floor(totalTurnaroundTime / length);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [3, 5],
  ])
);

// const queue = new PriorityQueue();

// queue.insert([0, 0, 3]);
// queue.insert([1, 1, 9]);
// queue.insert([2, 3, 5]);
// queue.remove();

// console.log(queue.value);
