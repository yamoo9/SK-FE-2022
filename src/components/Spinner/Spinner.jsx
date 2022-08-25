import { useEffect } from 'react';
import { exact, number, string } from 'prop-types';
import { createPortal } from 'react-dom';
import styles from './Spinner.module.scss';

/* -------------------------------------------------------------------------- */

export function Spinner({
  size,
  fill,
  stroke,
  strokeWidth,
  messages,
  ...restProps
}) {
  useEffect(() => {
    const loadingStart = document.getElementById('loading-start');
    loadingStart.setAttribute('role', 'alert');
    loadingStart.insertAdjacentHTML(
      'beforeend',
      `<span class=${styles.a11yHidden}>${messages.begin}</span>`
    );

    return () => {
      loadingStart.removeAttribute('role');
      loadingStart.innerHTML = '';

      const loadingEnd = document.getElementById('loading-end');
      loadingEnd.insertAdjacentHTML(
        'beforeend',
        `<span class=${styles.a11yHidden}>${messages.finish}</span>`
      );

      setTimeout(() => (loadingEnd.innerHTML = ''), 1000);
    };
  }, [messages.begin, messages.finish]);

  return createPortal(
    <svg
      role="presentation"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={styles.animation}
      width={size}
      height={size}
      {...restProps}
    >
      <path
        d="M20 25L80 25L80 75L20 75Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M50 25L80 25L80 75L50 75"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          begin="0s"
          keyTimes="0;0.5;0.501;1"
          values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
        />
        <animate
          attributeName="opacity"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          begin="0s"
          keyTimes="0;0.5;0.5001;1"
          values="1;1;0;0"
        />
      </path>
      <path
        d="M50 25L80 25L80 75L50 75"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          begin="-0.18444444444444444s"
          keyTimes="0;0.5;0.501;1"
          values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
        />
        <animate
          attributeName="opacity"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          begin="-0.18444444444444444s"
          keyTimes="0;0.5;0.5001;1"
          values="1;1;0;0"
        />
      </path>
      <path
        d="M50 25L80 25L80 75L50 75"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          begin="-0.3666666666666667s"
          keyTimes="0;0.5;0.501;1"
          values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
        />
        <animate
          attributeName="opacity"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          begin="-0.3666666666666667s"
          keyTimes="0;0.5;0.5001;1"
          values="1;1;0;0"
        />
      </path>
      <path
        d="M50 25L80 25L80 75L50 75"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          begin="-0.3666666666666667s"
          keyTimes="0;0.499;0.5;1"
          values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
        />
        <animate
          attributeName="opacity"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          begin="-0.3666666666666667s"
          keyTimes="0;0.4999;0.5;1"
          values="0;0;1;1"
        />
      </path>
      <path
        d="M50 25L80 25L80 75L50 75"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          begin="-0.18444444444444444s"
          keyTimes="0;0.499;0.5;1"
          values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
        />
        <animate
          attributeName="opacity"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          begin="-0.18444444444444444s"
          keyTimes="0;0.4999;0.5;1"
          values="0;0;1;1"
        />
      </path>
      <path
        d="M50 25L80 25L80 75L50 75"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          begin="0s"
          keyTimes="0;0.499;0.5;1"
          values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
        />
        <animate
          attributeName="opacity"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          begin="0s"
          keyTimes="0;0.4999;0.5;1"
          values="0;0;1;1"
        />
      </path>
    </svg>,
    document.body
  );
}

Spinner.defaultProps = {
  size: 300,
  fill: 'rgba(255, 255, 255, 0.9)',
  stroke: 'rgba(205, 228, 240, 0.9)',
  strokeWidth: 2,
  messages: {
    begin: '로딩 중입니다...',
    finish: '로딩이 완료되었습니다.',
  },
};

Spinner.propTypes = {
  size: number,
  fill: string,
  storke: string,
  strokeWidth: number,
  messages: exact({
    begin: string,
    finish: string,
  }),
};
