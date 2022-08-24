export const Button = ({ children, className, ...restProps }) => (
  <button
    lang="en"
    type="button"
    className={`button button--fixed ${className}`.trim()}
    {...restProps}
  >
    {children}
  </button>
);
