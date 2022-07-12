/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

const virtualNode = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: '' },
};

const styled = (styles, node) => {
  node.style.cssText = styles.reduce(
    (prevStyle, nextStyle) =>
      (prevStyle + nextStyle.trim()).replace(/\s+/g, ''),
    ''
  );
  return node;
};

const $styled = (node) => (styles) => {
  node.style.cssText = styles.reduce(
    (prevStyle, nextStyle) =>
      (prevStyle + nextStyle.trim()).replace(/\s+/g, ''),
    ''
  );
  return node;
};

/* -------------------------------------------------------------------------- */
/* Jest 테스트 코드                                                              */
/* -------------------------------------------------------------------------- */

// styled 유틸리티
describe('styled 유틸리티 suite', () => {
  beforeEach(() => {});

  test('styled 유틸리티', () => {
    const received = styled(['margin:10px;', 'color:salmon;'], virtualNode);

    expect(received.style.cssText).toBe(virtualNode.style.cssText);
  });

  test('tagged template literals : styled 유틸리티', () => {
    const received = styled`
      ${virtualNode}
      margin: 10px;
      color: salmon;
    `;

    expect(received.style.cssText).toBe(virtualNode.style.cssText);
  });

  // $styled 유틸리티
  test('$styled 유틸리티', () => {
    const received = $styled(virtualNode)`
      margin: 10px;
      color: salmon;
    `;
    expect(received).toStrictEqual(virtualNode);
  });
});
