/* eslint-disable jsx-a11y/anchor-has-content */
import { classNames } from 'utils';
import { string } from 'prop-types';

/* -------------------------------------------------------------------------- */

export function Link({ to, className, activeClass, ...restProps }) {
  return (
    <a
      href={to}
      className={classNames(`link ${activeClass}`.trim())(className)}
      {...restProps}
    />
  );
}

Link.defaultProps = {
  activeClass: '',
};

Link.propTypes = {
  to: string.isRequired,
  className: string,
  activeClass: string,
};
