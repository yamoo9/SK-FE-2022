import { A11yHidden, Banner } from 'components';
import { css } from '@emotion/css';

export default function App() {
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
    </section>
  );
}
