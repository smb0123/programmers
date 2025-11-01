function solution(s) {
  let count = 0;
  for (let i of s) {
    if (i === "(") {
      count++;
    } else {
      count--;
    }

    if (count < 0) {
      return false;
    }
  }

  if (count === 0) {
    return true;
  } else {
    return false;
  }
}
