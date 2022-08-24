import App from './App';
import { render, screen } from '@testing-library/react'


test('App의 로고는 접근성을 가진다. (예: "React Logo")', () => {
  // 컴포넌트 렌더링
  render(<App />);

  // 컴포넌트 내부의 대상을 가져와 테스트 코드 작성
  const logoElement = screen.getByRole('img');
  expect(logoElement).toHaveAttribute('src');
  expect(logoElement).toHaveAttribute('alt', 'React logo');
});