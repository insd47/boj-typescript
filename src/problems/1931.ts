// 문제 제출 전 무조건!
// 모든 주석은 제거 후 제출하세요.

// const fs = require("fs");
// const input: string = fs.readFileSync("/dev/stdin").toString();

export const solution = (stdinInput: string) => {
  const input = stdinInput.trim().split("\n");
  const list = input
    .splice(1)
    .map((value) => value.split(" ").map((number) => parseInt(number)))
    .sort((a, b) => {
      const test = a[0] - b[0];
      if (test === 0) return a[1] - b[1];
      return test;
    });

  let checking = [0, 0];
  let result = 0;

  list.forEach((value) => {
    const [start, end] = value;

    if (start >= checking[1]) {
      checking = value;
      result += 1;
    } else if (
      start >= checking[0] &&
      start < checking[1] &&
      end < checking[1]
    ) {
      checking = value;
    }
  });

  console.log(result);
};

// solution(input);
