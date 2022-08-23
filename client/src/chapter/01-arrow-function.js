/* eslint-disable jest/no-standalone-expect */
// CommonJS (Node.js) 모듈 불러오기
const { expect } = require('expect');

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// 함수 선언문 → 화살표 함수식

// 문(값을 반환 X)
// 식, 함수(값을 반환)

const fibonacci = n => (n <= 1) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

let result = fibonacci(8);

expect(result).toBe(34);
console.log('fibonacci(8) === 34 OK!');

// 함수 (표현)식 → 화살표 함수식

var numberWithComma = n => n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

result = numberWithComma(98000);

expect(result).toBe('98,000');
console.log('numberWithComma(98000) === "98,000" OK!');