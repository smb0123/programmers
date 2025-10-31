for (let i = 0; i < 5; i++) {
  for (let j = i + 1; j < 5; j++) {
    if (j == 1) {
      continue;
    }
    console.log(i, j);
  }
}
