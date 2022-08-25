import { A11yHidden } from 'components';

export default function App() {
  return (
    <div className="container">
      {/* <h1>Banner 컴포넌트가 이 곳에 위치해야 합니다.</h1> */}
      <A11yHidden as="h1">
        Banner 컴포넌트가 이 곳에 위치해야 합니다.
      </A11yHidden>
    </div>
  );
}
