// 문제 제출 전 무조건!
// 모든 주석은 제거 후 제출하세요.

// const fs = require("fs");
// const input: string = fs.readFileSync("/dev/stdin").toString();

export const solution = (stdinInput: string) => {
  const input = stdinInput.trim().split("\n");

  const N: number = parseInt(input[0]);
  const costs: number[] = input[1].split(" ").map((value) => parseInt(value));
  const M: number = parseInt(input[2]);

  if (costs.length <= 1) {
    console.log("0");
    return;
  }

  const orderedCosts: number[] = [...costs].sort((a, b) => a - b);
  const reversedCosts = [...costs].reverse();
  const smallest = orderedCosts[0];

  let budget = M;
  let result: string = "";

  const smallestIndex =
    costs.length - reversedCosts.findIndex((value) => value === smallest) - 1;
  const length =
    smallestIndex === 0
      ? 1 + Math.floor((M - orderedCosts[1]) / smallest)
      : Math.floor(M / smallest);

  const getLargestNumber = (i: number) => {
    let result = -1;

    reversedCosts.every((value, index) => {
      const nextBudget = budget - value;
      const leftLength = length - i - 1;

      if (nextBudget >= 0 && nextBudget - smallest * leftLength >= 0) {
        result = N - 1 - index;

        return false;
      }

      return true;
    });

    return result;
  };

  for (let i = 0; i < length; i++) {
    const largestNumber = getLargestNumber(i);
    if (largestNumber >= 0) {
      result += largestNumber.toString();
      budget -= costs[largestNumber];
    }
  }

  console.log(result.length > 0 ? result : "0");
};

// solution(input);
