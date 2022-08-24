import { EmojiOops } from '@/components';

let error = null;

// 오류 메시지를 포함한 객체를 추가해보세요.

/* -------------------------------------------------------------------------- */

const ConditionalRendering = () => {
  if (error === null || error === undefined) {
    console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');
  }

  error && typeof error.log === 'function' && error.log();

  // JSX 조건부 렌더링: if 문
  // 오류가 존재하면 렌더링 되도록 코드를 작성합니다.
  const displayErrorState = (
    <div className="container">
      <h1 className="headline">
        <EmojiOops height={200} />
        {/* 오류 메시지가 출력되도록 코드를 변경합니다. */}
        {error}
      </h1>
    </div>
  );

  return (
    <div className="container">
      <h1 className="headline">React 조건부 렌더링</h1>
      <p>오류가 존재하면 렌더링 되도록 코드를 작성합니다.</p>
    </div>
  );
};

export default ConditionalRendering;
