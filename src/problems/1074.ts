// 문제 제출 전 무조건!
// 모든 주석은 제거 후 제출하세요.

// const fs = require("fs");
// const input: string = fs.readFileSync("/dev/stdin").toString();

export const solution = (stdinInput: string) => {
  const input = stdinInput.trim().split(" ");

  const [N, r, c]: number[] = input.map((value) => parseInt(value));

  let result = 0;

  const findIndex = (N: number, r: number, c: number) => {
    const quater = 2 ** N / 2;

    const column = r < quater ? 0 : 2;
    const row = c < quater ? 0 : 1;

    const blockIndex = column + row;
    result += blockIndex * quater ** 2;

    if (quater > 1) findIndex(N - 1, r % quater, c % quater);
  };

  findIndex(N, r, c);

  console.log(result);
};

// solution(input);
