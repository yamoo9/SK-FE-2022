import { string } from 'prop-types';
import styles from './Header.module.scss';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export function Header({ className, ...restProps }) {
  return (
    <header
      className={classNames(styles.container)(className)}
      {...restProps}
    />
  );
}

Header.propTypes = {
  className: string,
};
