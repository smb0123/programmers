function solution(progresses, speeds) {
  const answer = [];
  const date = [];
  const stack = [];

  for (let i = 0; i < progresses.length; i++) {
    date.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let count = 1;
  stack.push(date[0]);

  for (let i = 1; i < date.length; i++) {
    if (stack[stack.length - 1] >= date[i]) {
      count++;
    } else {
      answer.push(count);
      stack.push(date[i]);
      count = 1;
    }

    if (i === date.length - 1) {
      answer.push(count);
    }
  }
  return answer;
}
