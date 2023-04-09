// 문제 제출 전 무조건!
// 모든 주석은 제거 후 제출하세요.

// const fs = require("fs");
// const input: string = fs.readFileSync("/dev/stdin").toString();

export const solution = (stdinInput: string) => {
  const input = stdinInput.trim().split("\n");
  const [N, M]: number[] = input[0].split(" ").map((value) => parseInt(value));

  const chars: {
    [key: string]: number;
  } = {};

  const values = input.splice(1);

  for (let y = 0; y < N * 2; y++) {
    const i = y % N;
    const row = values[i].repeat(2);

    row.split("").forEach((char, x) => {
      const cases = (x + 1) * (y + 1) * (M * 2 - x) * (N * 2 - y);
      if (chars[char]) chars[char] += cases;
      else chars[char] = cases;
    });
  }

  for (let i = 65; i <= 90; i++) {
    const count = chars[String.fromCharCode(i)];
    console.log(typeof count === "undefined" ? 0 : count);
  }
};

// solution(input);
