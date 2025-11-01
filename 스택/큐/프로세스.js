function solution(priorities, location) {
  const obj = [];

  for (let i = 0; i < priorities.length; i++) {
    obj.push([i, priorities[i]]);
  }

  let order = 1;

  while (1) {
    let max = 0;
    for (let i of obj) {
      if (i[1] > max) {
        max = i[1];
      }
    }

    const first = obj.shift();

    if (first[1] === max) {
      if (first[0] === location) {
        return order;
      } else {
        order++;
      }
    } else {
      obj.push(first);
    }
  }
}
