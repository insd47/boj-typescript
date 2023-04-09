// 문제 제출 전 무조건!
// 모든 주석은 제거 후 제출하세요.

// const fs = require("fs");
// const input: string = fs.readFileSync("/dev/stdin").toString();

const getCounts = (a: number, b: number) => {
  let result: number = 1;

  for (let i = a + b; i > b; i--) {
    result *= i;
  }

  for (let j = 1; j <= a; j++) {
    result /= j;
  }

  return result;
};

export const solution = (stdinInput: string) => {
  const [N, M, circle] = stdinInput
    .trim()
    .split(" ")
    .map((value) => parseInt(value));

  if (circle === 0) {
    console.log(getCounts(N - 1, M - 1));
    return;
  }

  const y: number = Math.ceil(circle / M);
  const x: number = circle - M * (y - 1);

  console.log(getCounts(x - 1, y - 1) * getCounts(M - x, N - y));
};

// solution(input);
