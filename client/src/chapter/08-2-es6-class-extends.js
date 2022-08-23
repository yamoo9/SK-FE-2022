/* --------------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                              */
/* --------------------------------------------------------------------------------- */

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

const saveButton = new Button('button', '저장');
console.log(Button.version);
console.log(saveButton.getType());

// Button 클래스를 확장한 AriaButton 클래스
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

console.log(AriaButton.displayName);

var resetButton = new AriaButton('reset', '초기화', false);
console.log(resetButton.getVersion());
