// 문제 제출 전 무조건!
// 모든 주석은 제거 후 제출하세요.

// const fs = require("fs");
// const input: string = fs.readFileSync("/dev/stdin").toString();

export const solution = (stdinInput: string) => {
  const input = stdinInput.trim().split("\n");

  const files = input.splice(1);
  let keyword = files[0].split("");

  if (parseInt(input[0]) > 1) {
    files.splice(1).forEach((file) => {
      file.split("").forEach((char, index) => {
        if (keyword[index] !== "?" && keyword[index] !== char)
          keyword[index] = "?";
      });
    });
  }

  console.log(keyword.join(""));
};

// solution(input);
