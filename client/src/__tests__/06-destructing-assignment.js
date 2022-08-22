/* eslint-disable no-unused-vars */

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

const state = Object.freeze({
  loading: false,
  error: null,
  data: [
    { id: 'kwdvj2ke1', title: 'euid' },
    { id: 'zwecr8kip', title: 'react' },
    { id: 'jdw1vkke1', title: 'gitbook' },
  ],
});

// 객체 속성과 일치하는 변수 선언 후, 속성 값 할당
const { loading, error, data } = state;

// 배열의 첫번째 아이템, 나머지 집합 추출
const [firstData, ...restData] = data;

/* -------------------------------------------------------------------------- */
/* Jest 테스트 코드                                                              */
/* -------------------------------------------------------------------------- */

// state 객체 구조 분해 할당
test('loading === false', () => {
  expect(loading).toBeFalsy();
});

// state.data 배열 구조 분해 할당
test('restData.length === 2', () => {
  expect(restData).toHaveLength(2);
});
