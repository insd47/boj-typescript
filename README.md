# Baekjoon Online Judge with TypeScript

BOJ 문제를 타입스크립트로 풀기 위한 구동 환경입니다.

## 프로젝트 초기화

yarn을 통해 필요한 모듈을 설치합니다.

```
yarn install
```

## 사용법

1. `./problems/templete.ts`를 복사하여 풀려는 문제의 번호로 붙여넣습니다.

```
cp ./src/problems/templete.ts ./src/problems/{ID}.ts
```

2. `./src/problems/{ID}.ts`의 solution 함수 아래에 코드를 작성합니다.

```
export const solution = (stdinInput: string) => {
  const input = stdinInput.trim().split("\n");

  // 코드 작성
};
```

3. `./src/index.ts`의 `import`문에서 문제 번호를 변경하고, 예제 입력을 `input` 변수에 붙여넣은 후, 코드를 실행합니다.

```
import { solution } from "./problems/{ID}";

const input = `
EXAMPLE INPUT
`;

solution(input);
```

```
yarn test
```
