// import './TiltCard.scss';
import styles from './TiltCard.module.scss';
import { forwardRef, useLayoutEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { css } from '@emotion/css';

/* -------------------------------------------------------------------------- */

function _TiltCard({ options, children }, ref) {
  const tiltCardRef = useRef(null);

  useLayoutEffect(() => {
    const { current: element } = tiltCardRef;
    VanillaTilt.init(element, options);
    return () => element.vanillaTilt.destroy();
  }, [options]);

  return (
    <div
      ref={tiltCardRef}
      // className="tiltCard"
      className={styles.container}
      style={{ display: 'flex', flexFlow: 'column', gap: 8 }}
    >
      {children}
      <button
        type="button"
        ref={ref}
        className={css`
          &:focus {
            background: #311f82;
            color: #fff;
          }
        `}
      >
        forward Ref
      </button>
    </div>
  );
}

_TiltCard.displayName = 'TiltCard';

export const TiltCard = forwardRef(_TiltCard);

TiltCard.defaultProps = {
  options: {
    max: 8,
    speed: 10,
    perspective: 1000,
    scale: 1.01,
    glare: true,
    'max-glare': 0.25,
  },
};
