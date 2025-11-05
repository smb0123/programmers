function solution(numbers) {
  let answer = "";

  numbers = numbers
    .map((number) => String(number))
    .sort((a, b) => b + a - (a + b));

  answer += numbers.join("");

  if (answer[0] === "0") return "0";

  return answer;
}

console.log(solution([3, 30, 34, 5, 9]));
