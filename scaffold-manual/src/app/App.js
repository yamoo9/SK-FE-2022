import React from 'react';
import { Link } from '../components';

export default function App() {
  return (
    <div className="App">
      <h1>React 개발 환경 매뉴얼 구성</h1>
      <ul>
        <li>
          <Link to="https://beta.reactjs.org/">React 베타 문서</Link>
        </li>
        <li>
          <Link to="https://vuejs.org/" external>
            Vue 공식 문서
          </Link>
        </li>
      </ul>
    </div>
  );
}
