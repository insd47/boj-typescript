// 문제 제출 전 무조건!
// 모든 주석은 제거 후 제출하세요.

// const fs = require("fs");
// const input: string = fs.readFileSync("/dev/stdin").toString();

export const solution = (stdinInput: string) => {
  const input = stdinInput.trim().split(" ");

  const [s, N, K, R1, R2, C1, C2]: number[] = input.map((value) =>
    parseInt(value)
  );

  const test = (width: number, i: number, j: number) => {
    let block = width / N;
    let result = 0;

    const testBlack = (index: number) =>
      index >= block * ((N - K) / 2) && index < block * ((N - K) / 2 + K);

    if (testBlack(i) && testBlack(j)) {
      result = 1;
    } else if (block <= 1) {
      result = 0;
    } else {
      const newWidth = width / N;
      result = test(newWidth, i % newWidth, j % newWidth);
    }

    return result;
  };

  for (let i = R1; i <= R2; i++) {
    let line: string = "";

    for (let j = C1; j <= C2; j++) {
      line += test(N ** s, i, j);
    }

    console.log(line);
  }
};

// solution(input);
