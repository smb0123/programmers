function solution(numbers, target) {
  var answer = 0;

  function cal(arr, sum) {
    if (arr.length === 0) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    let [first, ...rest] = arr;

    cal(rest, sum + first);
    cal(rest, sum - first);
  }

  cal(numbers, 0);

  return answer;
}

console.log(solution([4, 1, 2, 1], 4));
