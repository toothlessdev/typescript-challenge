/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #쉬움 #built-in #union

  ### 질문
  `T`에서 `U`에 할당할 수 있는 타입을 제외하는 내장 제네릭 `Exclude<T, U>`를 이를 사용하지 않고 구현하세요.

  > GitHub에서 보기: https://tsch.js.org/43/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

/**
 * T, 유니온 타입이 삼항연산자와 만나면 분배법칙으로 적용됨
 * @example
 * "a" | "b" | "c" extends "c" 이면
 * "a" extends "c"
 * "b" extends "c"
 * "c" extends "c"
 * 좌항이 우항의 supertype 인 경우 (extends), never 를 반환하고 그렇지 않다면 해당 T 를 반환
 * 결과적으로 유니온 타입에서 U 가 제거된 타입 반환
 */
type MyExclude<T, U> = T extends U ? never : T;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
    Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
    Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
    Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>
];

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/43/answer/ko
  > 정답 보기: https://tsch.js.org/43/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
