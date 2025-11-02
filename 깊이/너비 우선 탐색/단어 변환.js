function solution(begin, target, words) {
  const queue = [];
  const newWords = [];

  for (let i = 0; i < words.length; i++) {
    newWords.push({
      visited: false,
      value: words[i],
    });
  }

  while (queue.length) {
    console.log(queue);
    let [first, count] = queue.shift();

    if (first === target) {
      return count;
    }

    for (let i of newWords) {
      if (i.visited === false && compare(i.value, first)) {
        i.visited = true;
        let newCount = count + 1;
        queue.push([i.value, newCount]);
      }
    }
  }

  return 0;
}

function compare(val1, val2) {
  let count = 0;
  for (let i = 0; i < val2.length; i++) {
    if (val1[i] === val2[i]) {
      count++;
    }
  }

  if (val1.length - count === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
