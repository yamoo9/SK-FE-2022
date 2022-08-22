/* eslint-disable no-unused-vars */

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

/* 나머지 매개변수 (집합) -------------------------------------------------------- */

const multiplyCount = (first, ...rest) =>
  rest.reduce((acc, cur, idx) => (idx === 0 ? acc + cur : acc * cur), first);

// 테스트 코드를 작성합니다.
// multiplyCount(101, 3, 6, 9) 결과 값은 5000보다 크거가 같고, 10000보다 작다.

test('multiplyCount(101, 3, 6, 9) 결과 값은 5000보다 크거가 같고, 10000보다 작다.', () => {
  let value = multiplyCount(101, 3, 6, 9);
  expect(value).toBeGreaterThanOrEqual(5000);
  expect(value).toBeLessThan(10000);
});
