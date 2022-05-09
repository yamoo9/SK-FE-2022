// 1. numberWithComma 모듈을 불러옵니다.
// 2. currency 모듈을 "이름 내보내기"로 내보냅니다.
// 3. currencyKR 모듈을 "이름 내보내기"로 내보냅니다.

const currency = (n, symbol = '$', position = 'before') => {
  n = numberWithComma(n);

  switch (position) {
    default:
    case 'before':
      return `${symbol}${n}`;
    case 'after':
      return `${n}${symbol}`;
  }
};

const currencyKR = (n) => currency(n, '원', 'after');
