// 1. numberWithComma 모듈을 불러옵니다.
import numberWithComma from './numberWithComma.js';

// 2. currency 모듈을 "이름 내보내기( named export )"로 내보냅니다.
// 3. currencyKR 모듈을 "이름 내보내기"로 내보냅니다.

export const currency = (n, symbol = '$', position = 'before') => {
  n = numberWithComma(n);

  switch (position) {
    default:
    case 'before':
      return `${symbol}${n}`;
    case 'after':
      return `${n}${symbol}`;
  }
};

export const currencyKR = (n) => currency(n, '원', 'after');
