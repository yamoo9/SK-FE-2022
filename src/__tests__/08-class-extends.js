/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// Button 클래스
class Button {
  constructor(type, label) {
    this.type = type;
    this.label = label;
  }

  static version = '1.0.0';

  getType() {
    return this.type;
  }
}

// Button 클래스를 확장한 AriaButton 클래스
// eslint-disable-next-line no-unused-vars
class AriaButton extends Button {
  constructor(type, label, usingAria = true) {
    super(type, label);
    this.usingAria = usingAria;
  }
  static displayName = 'AriaButton';

  getVersion() {
    return AriaButton.version;
  }
}

/* -------------------------------------------------------------------------- */
/* Jest 테스트 코드                                                              */
/* -------------------------------------------------------------------------- */

test('new Button()은 Button 클래스의 인스턴스이다.', () => {
  expect(new Button('button', '저장')).toBeInstanceOf(Button);
});

test('new AriaButton()은 Button 클래스를 상속한다.', () => {
  const { type, label } = { type: 'submit', label: '전송' };
  const ariaButtonInstance = new AriaButton(type, label, false);
  expect(ariaButtonInstance.getType()).toBe(type);
  expect(ariaButtonInstance.label).toBe(label);
});
