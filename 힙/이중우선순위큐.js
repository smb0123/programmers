function solution(operations) {
  const heap = [];
  const op = operations.map((operation) => operation.split(" "));
  console.log(op);

  op.forEach((num) => {
    if (num[0] === "I") {
      heap.push(Number(num[1]));
    } else {
      const findValue = (num[1] === "1" ? Math.max : Math.min)(...heap);
      const delIdx = heap.indexOf(findValue);
      heap.splice(delIdx, 1);
    }
  });

  return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0];
}

console.log(
  solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
);
