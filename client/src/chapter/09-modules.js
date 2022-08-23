// 1. utils 모듈을 "모듈 객체"로 불러옵니다.
// import * as Utils from '../utils/index.js';

// console.log(Utils);
// console.log(Utils.currency(980700));

// 2. utils 모듈 중, numberWithComma 함수를 추출합니다.
// import { numberWithComma } from '../utils/index.js';

// console.log(numberWithComma(88000000));

// 3. utils 모듈 중, currencyKR 함수를 currency (별칭) 이름으로 추출합니다.
import { currencyKR as currency } from '../utils/index.js';

console.log(currency(88000000));
