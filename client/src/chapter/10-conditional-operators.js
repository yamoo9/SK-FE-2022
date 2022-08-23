/* eslint-disable jest/expect-expect */

/* 3항 연산 식(터너리), null 병합 연산자, 옵셔널 체이닝을 활용해 코드를 작성합니다. ---------------- */

// A ? B : C

// ----------------------------------------------------------------------------------
// Nullish coalescing operator
// Null 병합 연산자 ??
// ----------------------------------------------------------------------------------

const defaultArg = (value, initialValue) => {
  // Ternaries
  // 아래 코드를 3항 연산 식으로 변경합니다.
  // return !(value === null || value === undefined) ? value : initialValue;

  // Nullish coalescing operator
  // null 병합 연산자를 사용한 식으로 변경합니다.
  return value ?? initialValue;
};

const ellipsisText = (text, limit = 100) => {
  // 기본 매개변수를 활용해 코드를 변경합니다.
  return `${text.slice(0, limit).trim()}...`;
};

let desc = `
  JavaScript는 문 보다, 식을 사용해 조건 처리하는 경우가 잦습니다. 
  자주 사용되는 조건 식에 대해 정리합니다.
`.trim();

// ----------------------------------------------------------------------------------
// Optional chaning
// 선택적으로 연결 ?.
// ----------------------------------------------------------------------------------

const company = Object.freeze({
  name: 'EUID',
  location: {
    lat: 321,
    lng: -39,
  },
  getLocation() {
    return Object.values(company.location);
  },
});

let companyName, companyLat;

// type guard
// if ('companyName' in company) {
//   companyName = company.companyName;
// }

companyName = company?.companyName;

console.log('companyName = ', companyName);

// if ('location' in company) {
//   if ('lat' in company.location) companyLat = company.location.lat;
// }

companyLat = company.location?.lat;

console.log('companyLat = ', companyLat);

// if ('getFoundingDate' in company) {
//   if (typeof company.getFoundingDate === 'function') company.getFoundingDate();
// }

company.getFoundingDate?.();

// if ('getLocation' in company) {
//   if (typeof company.getLocation === 'function') company.getLocation();
// }

company.getLocation?.();
