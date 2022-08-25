import { useState } from 'react';
import { BaseLayout } from 'layouts';

/* pages -------------------------------------------------------------------- */

import Landing from 'pages/Landing/Landing';

/* app ---------------------------------------------------------------------- */

export default function App() {
  const [navigation] = useState([
    { id: 'home', href: '/', text: '홈' },
    { id: 'dashboard', href: '/dashboard', text: '대시보드' },
    {
      id: 'products',
      href: '/products',
      text: '프로덕트',
      children: [
        {
          id: 'profile',
          href: 'profile',
          text: '프로필',
        },
        {
          id: 'settings',
          href: 'settings',
          text: '설정',
        },
      ],
    },
  ]);

  return (
    <BaseLayout navigation={navigation}>
      <Landing />
    </BaseLayout>
  );
}
