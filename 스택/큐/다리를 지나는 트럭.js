function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let sum = 0;
  const bridge = [];

  for (let i = 0; i < bridge_length; i++) {
    bridge.push(0);
  }

  while (truck_weights.length > 0) {
    if (sum + truck_weights[0] <= weight) {
      const first = bridge.shift();
      const truck = truck_weights.shift();
      bridge.push(truck);
      sum = sum + truck - first;
      answer++;
    } else if (sum - bridge[0] + truck_weights[0] <= weight) {
      const first = bridge.shift();
      const truck = truck_weights.shift();
      bridge.push(truck);
      sum = sum - first + truck;
      answer++;
    } else {
      const first = bridge.shift();
      bridge.push(0);
      sum = sum - first;
      answer++;
    }
  }

  while (sum !== 0) {
    const first = bridge.shift();
    bridge.push(0);
    sum -= first;
    answer++;
  }

  return answer;
}
