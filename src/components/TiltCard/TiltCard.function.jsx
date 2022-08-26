import './TiltCard.css';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */

export function TiltCard({ options, children }) {
  const tiltCardRef = useRef(null);

  useEffect(() => {
    const { current: element } = tiltCardRef;
    VanillaTilt.init(element, options);
    return () => element.vanillaTilt.destroy();
  }, [options]);

  return (
    <div ref={tiltCardRef} className="tiltCard">
      {children}
    </div>
  );
}

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
