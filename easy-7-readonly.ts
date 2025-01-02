/*
  7 - Readonly
  -------
  by Anthony Fu (@antfu) #쉬움 #built-in #readonly #object-keys

  ### 질문
  `T`의 모든 프로퍼티를 읽기 전용(재할당 불가)으로 바꾸는 내장 제네릭 `Readonly<T>`를 이를 사용하지 않고 구현하세요.

  > GitHub에서 보기: https://tsch.js.org/7/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

/**
 * Record 타입의 T 의 key 에 대한 타입을 keyof T 를 통해 가져오고 in 을 사용해 매핑된 타입을 순회합니다
 * 모든 키 타입에 대해 readonly 속성을 적용한 새로운 객체를 반환합니다
 */
type MyReadonly<T extends Record<string, any>> = {
    readonly [K in keyof T]: T[K];
};

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
        author: string;
    };
}

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/7/answer/ko
  > 정답 보기: https://tsch.js.org/7/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
