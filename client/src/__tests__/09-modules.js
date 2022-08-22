// 1. utils 모듈을 "모듈 객체"로 불러옵니다.
import * as utils from '../utils/index.js';

// 2. utils 모듈 중, numberWithComma 함수를 추출합니다.
import { numberWithComma } from '../utils/index.js';

// 3. utils 모듈 중, currencyKR 함수를 currency (별칭) 이름으로 추출합니다.
import { currencyKR as currency } from '../utils/index.js';

/* -------------------------------------------------------------------------- */
/* Jest 테스트 코드                                                              */
/* -------------------------------------------------------------------------- */

test(`utils.currency(3900) === '$3,900'`, () => {
  expect(utils.currency(3900)).toBe('$3,900');
});

test(`numberWithComma(3900) === '3,900'`, () => {
  expect(numberWithComma(3900)).toBe('3,900');
});

test(`currency(3900) === '3,900원'`, () => {
  expect(currency(3900)).toBe('3,900원');
});
