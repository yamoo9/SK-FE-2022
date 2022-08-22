/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

var state = Object.freeze({
  loading: false,
  error: null,
  data: [
    { id: 'kwdvj2ke1', title: 'euid' },
    { id: 'zwecr8kip', title: 'react' },
    { id: 'jdw1vkke1', title: 'gitbook' },
  ],
});

// 객체 속성과 일치하는 변수 선언 후, 속성 값 할당
var loading = state.loading;
var error = state.error;
var data = state.data;

// 배열의 첫번째 아이템, 나머지 집합 추출
var firstData = data[0];
var restData = data.slice(1);