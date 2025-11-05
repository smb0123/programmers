function solution(array, commands) {
  var answer = [];
  for (let i of commands) {
    const newArr = array.slice(i[0] - 1, i[1]).sort((a, b) => a - b);
    answer.push(newArr[i[2] - 1]);
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
