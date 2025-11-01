function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  function bfs() {
    const queue = [[0, 0, 1]];
    maps[0][0] = 0;

    while (queue.length) {
      const [x, y, distance] = queue.shift();
      if (x === n - 1 && y === m - 1) {
        return distance;
      }

      if (
        x - 1 >= 0 &&
        x - 1 <= n - 1 &&
        y >= 0 &&
        y <= m - 1 &&
        maps[x - 1][y] > 0
      ) {
        queue.push([x - 1, y, distance + 1]);
        maps[x - 1][y] = 0;
      }
      if (
        x + 1 >= 0 &&
        x + 1 <= n - 1 &&
        y >= 0 &&
        y <= m - 1 &&
        maps[x + 1][y] > 0
      ) {
        queue.push([x + 1, y, distance + 1]);
        maps[x + 1][y] = 0;
      }
      if (
        x >= 0 &&
        x <= n - 1 &&
        y - 1 >= 0 &&
        y - 1 <= m - 1 &&
        maps[x][y - 1] > 0
      ) {
        queue.push([x, y - 1, distance + 1]);
        maps[x][y - 1] = 0;
      }
      if (
        x >= 0 &&
        x <= n - 1 &&
        y + 1 >= 0 &&
        y + 1 <= m - 1 &&
        maps[x][y + 1] > 0
      ) {
        queue.push([x, y + 1, distance + 1]);
        maps[x][y + 1] = 0;
      }
    }

    return -1;
  }

  return bfs();
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
