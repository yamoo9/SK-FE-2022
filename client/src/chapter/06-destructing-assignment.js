/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// de + structuring assignment
// let variable = object|array

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
// const loading = state.loading;
// const error = state.error;
// const titleList = state.data;
const { loading, error, data: titleList } = state;

console.log(loading);
console.log(error);
console.log(titleList);

// 배열의 첫번째 아이템, 나머지 집합 추출
const [firstTitle, ...restTitles] = titleList; // [ 0: {...}, 1: {...}, 2: {...} ]

console.log(firstTitle);
console.log(restTitles);
// const firstData = titleList[0];
// const restData = titleList.slice(1);
