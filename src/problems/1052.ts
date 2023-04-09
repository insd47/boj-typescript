// 문제 제출 전 무조건!
// 모든 주석은 제거 후 제출하세요.

// const fs = require("fs");
// const input: string = fs.readFileSync("/dev/stdin").toString();

export const solution = (stdinInput: string) => {
  const input = stdinInput.trim().split(" ");

  const N: number = parseInt(input[0]);
  const K: number = parseInt(input[1]);

  const get = (N: number, K: number) => {
    let id: number = 0;
    let buckets: number = N;
    let leftBuckets: number[] = [];

    while (buckets > 0) {
      if (buckets % 2 > 0) {
        buckets = (buckets - 1) / 2;
        leftBuckets.unshift(id);
      } else {
        buckets = buckets / 2;
      }
      id = id + 1;
    }

    const margin: number = K - 1;
    const leftCount: number = leftBuckets.length;
    let result: number = 0;

    if (leftCount > K) {
      result = 2 ** leftBuckets[margin];

      for (let i = margin + 1; i < leftCount; i++) {
        result = result - 2 ** leftBuckets[i];
      }
    }

    return result;
  };

  console.log(get(N, K));
};

// solution(input);
