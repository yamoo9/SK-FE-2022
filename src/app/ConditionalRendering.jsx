import { EmojiOops } from '@/components';

let error = null;

// 오류 메시지를 포함한 객체를 추가해보세요.
error = {
  name: 'UNKNOWN_ERROR',
  message: '알 수 없는 오류가 발생했습니다.',
  log() {
    console.log('LOG:', this.message);
  },
};

/* -------------------------------------------------------------------------- */

const ConditionalRendering = () => {
  // nullish 연산자
  error ?? console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');

  // 옵셔널 체이닝
  error.log?.();

  // JSX 조건부 렌더링: if 문
  // 오류가 존재하면 렌더링 되도록 코드를 작성합니다.
  // if (error) {
  //   // React Element
  //   return (
  //     <div className="container">
  //       <h1 className="headline">
  //         <EmojiOops height={200} />
  //         {/* 오류 메시지가 출력되도록 코드를 변경합니다. */}
  //         {error.name} : {error.message}
  //       </h1>
  //     </div>
  //   );
  // }

  // 3항 연산자 식 (JSX 식)

  return (
    <div className="container">
      <h1 className="headline">
        {!error
          ? 'React 조건부 렌더링'
          : [
              <EmojiOops key={'@emoji'} height={200} />,
              `${error.name} : ${error.message}`,
            ]}
      </h1>
      {/* 조건부 표시(display) */}
      {/* <p style={{ display: !error ? 'block' : 'none' }}>
        오류가 존재하면 렌더링 되도록 코드를 작성합니다.
      </p> */}

      {/* 조건부 렌더링 */}
      {/* {error ? null : <p>오류가 존재하면 렌더링 되도록 코드를 작성합니다.</p>} */}
      {/* 논리 연산자 */}
      {!error && <p>오류가 존재하면 렌더링 되도록 코드를 작성합니다.</p>}
    </div>
  );
};

export default ConditionalRendering;
