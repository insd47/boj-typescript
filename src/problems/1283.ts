// 문제 제출 전 무조건!
// 모든 주석은 제거 후 제출하세요.

// const fs = require("fs");
// const input: string = fs.readFileSync("/dev/stdin").toString();

export const solution = (stdinInput: string) => {
  const input = stdinInput.trim().split("\n");
  const [_, ...list] = input;
  let usedLetters: string[] = [];

  list.forEach((name) => {
    let result = name;

    const changeLetter = (letter: string, index: number) => {
      usedLetters.push(letter);
      result =
        name.substring(0, index) + `[${letter}]` + name.substring(index + 1);
    };

    let changingIndex: number = 0;

    for (const word of name.split(" ")) {
      const firstLetter = word.substring(0, 1);

      if (
        usedLetters.findIndex(
          (value) => value.toUpperCase() === firstLetter.toUpperCase()
        ) <= -1
      ) {
        changeLetter(firstLetter, changingIndex);
        break;
      } else {
        changingIndex += word.length + 1;
      }
    }

    if (result === name) {
      name.split("").every((letter, index) => {
        if (
          letter !== " " &&
          usedLetters.findIndex(
            (value) => value.toUpperCase() === letter.toUpperCase()
          ) <= -1
        ) {
          changeLetter(letter, index);
          return false;
        } else {
          return true;
        }
      });
    }

    console.log(result);
  });
};

// solution(input);
