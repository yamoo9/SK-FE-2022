import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';
import { A11yHidden, Banner, RandomUserFC, RandomUser } from 'components';
import { css } from '@emotion/css';
import { useMouse } from './hooks/useMouse';

// memoization pattern

export default function App() {
  const { x, y } = useMouse();

  console.log('mouse x = ', x);
  console.log('mouse y = ', y);
  console.log('-----------------------');

  // 훅의 등장 시기 (2019)
  // 함수 컴포넌트 : 상태 관리
  // useState 훅 사용
  const [uidA, setUidA] = useState(uuid());
  const [uidZ, setUidZ] = useState(uuid());

  // 함수 컴포넌트 : 사이드 이펙트 관리
  // useEffect 훅 사용
  // useEffect(() => {
  //   console.log('side effect of App');
  // });

  const handleRerenderRandomUser = () => {
    setUidA(uuid());
    setUidZ(uuid());
  };

  return (
    <section className="container">
      <A11yHidden as="h1">
        Banner 컴포넌트가 이 곳에 위치해야 합니다.
      </A11yHidden>

      <Banner
        hidden
        url="cover.jpg"
        width={374}
        height={800}
        className={css`
          border: 20px solid #fff;
        `}
      >
        선한 영향력 = 플라스틱으로부터 바다를 지키는 능력 우리 모두를 생각하는
        '선한 영향력'이 더 큰 영향력이 되도록 SK도 노력하겠습니다. 모두가 함께,
        행복하도록 OK! SK
      </Banner>

      {/* <AlbumList /> */}

      <button
        className={css`
          cursor: pointer;
          position: fixed;
          top: 20px;
          right: 20px;
          padding: 12px 16px;
        `}
        type="button"
        lang="en"
        onClick={handleRerenderRandomUser}
      >
        request data
      </button>

      {/* 고차 컴포넌트 */}
      <RandomUserFC key={uidA} />
      <RandomUser key={uidZ} />
    </section>
  );
}
