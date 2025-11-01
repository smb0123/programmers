function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let networkCount = 0;

  function dfs(node) {
    visited[node] = true;

    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      networkCount++;
    }
  }

  return networkCount;
}

console.log(
  solution(6, [
    [1, 0, 1, 1, 0, 1],
    [0, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 1, 0],
    [0, 1, 0, 1, 1, 0],
    [1, 0, 0, 0, 0, 1],
  ])
);
