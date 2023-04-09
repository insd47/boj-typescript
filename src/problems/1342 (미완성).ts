// 문제 제출 전 무조건!
// 모든 주석은 제거 후 제출하세요.

// const fs = require("fs");
// const input: string = fs.readFileSync("/dev/stdin").toString();

export const solution = (stdinInput: string) => {
  const input = stdinInput.trim().split("");

  const chars: {
    [key: string]: number;
  } = {};

  input.forEach((value) => {
    if (chars[value]) chars[value] += 1;
    else chars[value] = 1;
  });
};

// solution(input);
