import { css } from '@emotion/css';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import {
  A11yHidden,
  StyledA11yHidden,
  Banner,
  RandomUserFC,
  RandomUser,
  AlbumList,
  TiltCardContainer,
} from 'components';

/* another hooks ------------------------------------------------------------ */

export default function App() {
  return (
    <section className="container">
      <StyledA11yHidden as="h1">React 훅</StyledA11yHidden>
      <TiltCardContainer />
    </section>
  );
}

/* useState, useEffect ------------------------------------------------------ */

export function LectureApp() {
  const [isShowAlbumList, setIsShowAlbumList] = useState(false);

  const handleUpdate = () => setIsShowAlbumList(!isShowAlbumList);

  const [uidA, setUidA] = useState(() => {
    // 지연된 초기화는 1회 설정
    // console.log('initialization');
    return uuid();
  });

  const [uidZ, setUidZ] = useState(() => uuid());

  const handleRerenderRandomUser = () => {
    setUidA((uid) => `${uid}-`);
    setUidZ(uuid());
  };

  return (
    <section className="container">
      <A11yHidden as="h1">
        Banner 컴포넌트가 이 곳에 위치해야 합니다.
      </A11yHidden>

      <Banner
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

      <button lang="en" type="button" onClick={handleUpdate}>
        toggle albumlist
      </button>

      {isShowAlbumList && <AlbumList />}

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

      <RandomUserFC key={uidA} />
      <RandomUser key={uidZ} />
    </section>
  );
}
