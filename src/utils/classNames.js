export const classNames =
  (baseClassNames) =>
  (customClassNames = '') =>
    `${baseClassNames} ${customClassNames}`.trim();
