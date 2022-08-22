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