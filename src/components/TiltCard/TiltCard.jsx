/* eslint-disable */

import './TiltCard.css';
import React from 'react';
// import VanillaTilt from 'vanilla-tilt'

/* -------------------------------------------------------------------------- */
// 참고
// Vanilla Tilt — https://www.npmjs.com/package/vanilla-tilt
// jQuery Tilt  — https://www.npmjs.com/package/tilt.js
// React Tilt   — https://www.npmjs.com/package/react-parallax-tilt
/* -------------------------------------------------------------------------- */

// Vanilla Tilt 옵션
const tiltOptions = {
  'max': 8,
  'speed': 10,
  'perspective': 1000,
  'scale': 1.01,
  'glare': true,
  'max-glare': 0.25,
};

export class TiltCard extends React.Component {
  static defaultProps = {
    options: tiltOptions,
  };

  // DOM 요소 참조를 목적으로 Ref를 생성합니다.
  // → 코드 작성

  // 최초 마운트 시점 이후 처리할 로직을 작성합니다.
  // → 코드 작성

  // 마운트 해제 직전에 처리할 로직을 작성합니다.
  // → 코드 작성

  render() {
    const { children } = this.props;

    return (
      // 생성된 Ref를 참조하도록 설정합니다.
      <div className="tiltCard">{children}</div>
    );
  }
}
