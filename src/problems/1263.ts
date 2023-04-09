// 문제 제출 전 무조건!
// 모든 주석은 제거 후 제출하세요.

// const fs = require("fs");
// const input: string = fs.readFileSync("/dev/stdin").toString();

export const solution = (stdinInput: string) => {
  const input = stdinInput.trim().split("\n");

  const [N, ...rawList] = input;

  const list = rawList
    .map((value) => value.split(" ").map((value) => parseInt(value)))
    .sort((a, b) => a[1] - b[1]);

  let result = 0;

  if (list[0][1] >= list[0][0]) {
    const getTime = (testCase: number) => {
      result = testCase;
      let timeStack = testCase + list[0][0];

      for (let i = 1; i < parseInt(N); i++) {
        timeStack += list[i][0];
        if (timeStack > list[i][1]) {
          if (testCase > 0) {
            getTime(testCase - 1);
            break;
          } else {
            result = -1;
            break;
          }
        }
      }
    };
    getTime(list[0][1] - list[0][0]);
  } else {
    result = -1;
  }

  console.log(result);
};

// solution(input);
