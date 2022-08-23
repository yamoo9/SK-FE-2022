/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// 함수 선언문 → 화살표 함수식

// 문(값을 반환 X)
// 식, 함수(값을 반환)

const fibonacci = n => (n <= 1) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

let result = fibonacci(8);
console.log(result);

// 함수 (표현)식 → 화살표 함수식

var numberWithComma = n => n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

result = numberWithComma(98000);
console.log(result);
