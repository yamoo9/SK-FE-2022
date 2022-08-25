// CSS
// import './A11yHidden.css';

// CSS Modules
import styles from './A11yHidden.module.css';

// emotion/css
import { css } from '@emotion/css';

export const A11yHidden = ({
  as: ComponentName,
  className,
  focusable,
  ...restProps
}) => {
  return (
    <ComponentName
      className={`${elementStyle} ${
        focusable ? styles.focusable : ''
      } ${className}`.trim()}
      {...restProps}
    />
  );
};

A11yHidden.defaultProps = {
  as: 'span',
  className: '',
  focusable: false,
};

/* styles ------------------------------------------------------------------- */

const elementStyle = css`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;

  /* nested rule */
  span {
    color: #11a388;
  }
`;
