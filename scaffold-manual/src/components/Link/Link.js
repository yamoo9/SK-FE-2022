import React from 'react';
import './Link.css';

// Presentational Component
// Stateless Component

export function Link({ to, external, ...restProps }) {
  let targetProp = external ? '_blank' : null;
  let relProp = external ? 'noreferrer noopener' : null;

  return (
    <a
      className="link"
      href={to}
      target={targetProp}
      rel={relProp}
      {...restProps}
    />
  );
}
