/* eslint-disable no-unused-vars */

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

/* 배열 전개 ------------------------------------------------------------------- */

var integers = [-1, 0, 32, -101, 24];
var maxInt = Math.max.apply(Math, [20, -101].concat(integers));

// 테스트 코드를 작성합니다.
// maxInt 결과 값

/* 객체 전개 ------------------------------------------------------------------- */

// 상태 업데이트 유틸리티 함수
var setState = function (newState) {
  // state 속성 전개
  // newState 속성 전개
  // 병합된 새 상태 객체
  return {
    ...state,
    ...newState,
  };
};

// 상태 객체 (불변 데이터 화)
// React = 선언형 프로그래밍 패러다임
// 불변(immutable) 데이터 관리
var state = Object.freeze({
  loading: false,
  error: null,
  data: [{ id: 101, title: '초기 데이터' }],
});

// 테스트 코드를 작성합니다.
// setState 유틸리티

test('setState 유틸리티', () => {
  const newState = setState({
    loading: true,
  });

  expect(newState.loading).toBeTruthy();
});

test('setState() 유틸리티: 중첩된 객체 병합', () => {
  const newState = setState({
    data: [...state.data, { id: 201, title: '추가 데이터' }],
  });

  expect(newState).toStrictEqual({
    ...state,
    data: [
      { id: 101, title: '초기 데이터' },
      { id: 201, title: '추가 데이터' },
    ],
  });
});
