/* eslint-disable no-unused-vars */

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// 일반 함수 식 참조
const show = function () {
  return `${this.name} 보다.`;
};

const look = function () {
  return `${this.name} 지켜보다.`;
};

// 화살표 함수 식 참조
// 화살표 함수 식 내부의 this는 일반 함수의 this와 가리키는 대상이 다릅니다.
const watch = function () {
  return `${this.name} 관찰하다.`;
};

/* 아래 ES5 코드를 ES6 코드로 변경합니다. ------------------------------------------ */

const euid = {
  name: '이듬',
  show,
  look,
  watch,
};

/* -------------------------------------------------------------------------- */
/* Jest 테스트 코드                                                              */
/* -------------------------------------------------------------------------- */

// 객체의 메서드로 화살표 함수를 사용하면 this는 undefined이다.

/* -------------------------------------------------------------------------- */

const setDynamicProperty = (object, propName, value) => {
  object[propName] = function () {
    return this.name + '처럼 ' + value + '하다.';
  };
  return [propName, value];
};

// 계산된 속성을 사용해 객체의 메서드 이름을 think로 설정할 수 있다.
test('계산된 속성을 사용해 객체의 메서드 이름을 think로 설정할 수 있다.', () => {
  let propertyName = 'think';
  const [propName, value] = setDynamicProperty(euid, propertyName, '생각하다');
  expect(propName).toEqual(propertyName);
});

// 계산된 속성을 사용해 객체의 메서드 이름을 behavior로 변경할 수 있다.
test('계산된 속성을 사용해 객체의 메서드 이름을 behavior로 변경할 수 있다.', () => {
  let methodName = 'behavior';
  let returnValue = '행동하다';
  const [propName, value] = setDynamicProperty(
    euid,
    methodName,
    () => returnValue
  );
  expect(value()).toEqual(returnValue);
});
