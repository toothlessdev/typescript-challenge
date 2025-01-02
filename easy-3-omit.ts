/*
  3 - Omit
  -------
  by Anthony Fu (@antfu) #보통 #union #built-in

  ### 질문
  `T`에서 `K` 프로퍼티만 제거해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Omit<T, K>`를 이를 사용하지 않고 구현하세요.

  > GitHub에서 보기: https://tsch.js.org/3/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

/**
 * `P in keyof T` : T 객체의 모든 키를 순회하면서 객체의 키값에 대한 타입을 P 로 가져옴
 * `P extends K ? never : P` : P 가 K 에 포함되면 never, 포함되지 않으면 P. 따라서 P 가 K 에 포함되면 P 는 never 로 변환되어, 최종타입에서 제거됨.
 * `never` 타입의 키는 타입 매핑시 무시되므로, K 에 해당하는 속성은 제외되고, 나머지 속성만 남음
 */
type MyOmit<T extends Record<string, any>, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
    Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
    Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>,
    Expect<Equal<Expected3, MyOmit<Todo1, "description" | "completed">>>
];

// @ts-expect-error
type error = MyOmit<Todo, "description" | "invalid">;

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

interface Todo1 {
    readonly title: string;
    description: string;
    completed: boolean;
}

interface Expected1 {
    title: string;
    completed: boolean;
}

interface Expected2 {
    title: string;
}

interface Expected3 {
    readonly title: string;
}

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/3/answer/ko
  > 정답 보기: https://tsch.js.org/3/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
