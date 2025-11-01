function solution(prices) {
  const result = [];

  for (let i = 0; i < prices.length; i++) {
    let target = prices[i];
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (target > prices[j]) {
        count++;
        result.push(count);
        break;
      } else {
        count++;

        if (j === prices.length - 1) {
          result.push(count);
        }
      }
    }
  }
  result.push(0);

  return result;
}

console.log(solution([1, 2, 3, 2, 3]));
