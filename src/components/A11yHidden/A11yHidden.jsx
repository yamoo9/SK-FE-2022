import { bool, elementType, oneOfType, string } from 'prop-types';
import styles from './A11yHidden.module.scss';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export function A11yHidden({
  as: Component,
  className,
  focusable,
  ...restProps
}) {
  return (
    <Component
      className={classNames(styles.wrapper)(
        `${focusable ? styles.focusable : ''} ${className}`
      )}
      {...restProps}
    />
  );
}

A11yHidden.defaultProps = {
  as: 'span',
  className: '',
  focusable: false,
};

A11yHidden.propTypes = {
  as: oneOfType([elementType, string]),
  className: string,
  focusable: bool,
};
