/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

const defaultArg = (value, initialValue) => {
  if (value === null || value === undefined) {
    value = initialValue;
  }
  return value;
};

const truncateText = (text, limit) => {
  limit = defaultArg(limit, 100);
  return `${text.slice(0, limit).trim()}...`;
};

const desc = `
  기본 매개변수(Default Paramters)는 함수 매개변수의 
  기본 값을 선언적으로 표현하는 강력한 방법입니다.
`.trim();

/* -------------------------------------------------------------------------- */
/* Jest 테스트 코드                                                              */
/* -------------------------------------------------------------------------- */

// truncateText(desc) 반환 값의 글자 수
test('truncateText(desc) 반환 값의 글자 수', () => {
  let sliceCount = 62;
  expect(truncateText(desc, sliceCount)).toHaveLength(sliceCount + 3);
});
