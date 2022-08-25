/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-render-in-setup */
import { A11yHidden } from './A11yHidden';
import { render, screen } from '@testing-library/react';

let componentElement = null;
let description = '이 컴포넌트는 화면에 표시되지 않습니다.';

beforeEach(() => {
  render(<A11yHidden>{description}</A11yHidden>);
  componentElement = screen.getByText(description);
});

describe('A11yHidden 컴포넌트', () => {
  test(`as prop의 기본 값은 "span"이다.`, () => {
    expect(componentElement).toBeInTheDocument();
    expect(componentElement.localName).toBe('span');
  });

  test(`컴포넌트 요소의 as="article" prop 설정으로 <article> 요소로 렌더링 된다.`, () => {
    render(<A11yHidden as="article" />);
    const componentElement = screen.getByRole('article');
    expect(componentElement).toBeInTheDocument();
  });

  test(`컴포넌트 요소는 a11yHidden 클래스 이름을 포함한다.`, () => {
    // Jest matcher function
    // jest-dom matcher function
    expect(componentElement).toHaveClass('a11yHidden');
  });

  test(`컴포넌트 요소는 사용자가 추가한 클래스 이름 "iDontSeeYou"를 포함한다.`, () => {
    render(<A11yHidden as="article" className="iDontSeeYou" />);
    const element = screen.getByRole('article');
    expect(element).toHaveClass('a11yHidden', 'iDontSeeYou');
  });

  test(`컴포넌트 요소는 focusable prop 설정 시, 'focusable' 클래스 이름을 포함한다.`, () => {
    render(<A11yHidden data-testid="demo" focusable />);

    const element = screen.getByTestId('demo');

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('focusable');
  });

  test('컴포넌트 요소는 화면에 표시되지 않지만, 스크린 리더에서는 읽을 수 있다.', () => {
    // Jest에서 CSS 스타일 설정된 테스트가 어려워 직접 CSS 코드를 삽입하여 테스트 수행
    componentElement.style.cssText = `
      visibility: hidden;
      overflow: hidden;
      position: absolute;
      clip: rect(0,0,0,0);
      clip-path: circle(0);
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;
      white-space: nowrap;
    `;

    const componentElementStyle = getComputedStyle(componentElement);
    expect(componentElement).not.toBeVisible();
    expect(parseInt(componentElementStyle.height, 10)).toBeGreaterThan(0);
  });
});
