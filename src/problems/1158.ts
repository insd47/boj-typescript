// 문제 제출 전 무조건!
// 모든 주석은 제거 후 제출하세요.

// const fs = require("fs");
// const input: string = fs.readFileSync("/dev/stdin").toString();

export const solution = (stdinInput: string) => {
  const input = stdinInput.trim().split(" ");

  const N: number = parseInt(input[0]);
  const K: number = parseInt(input[1]);

  let chairs: number[] = Array.from({ length: N }, (v, i) => i + 1);

  let chairsLength: number = N;
  let indexToDel: number = K - 1;
  let result: string = "";

  for (let i: number = 0; i < N; i++) {
    result = result + chairs[indexToDel].toString();

    if (i < N - 1) {
      result = result + ", ";

      chairs.splice(indexToDel, 1);
      chairsLength = chairsLength - 1;
      indexToDel = (indexToDel + K - 1) % chairsLength;
    }
  }

  console.log("<" + result + ">");
};

// solution(input);
