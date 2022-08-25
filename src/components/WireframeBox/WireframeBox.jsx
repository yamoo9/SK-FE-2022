import { number, object, string } from 'prop-types';
import styles from './WireframeBox.module.scss';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export function WireframeBox({ height, className, style, ...restProps }) {
  return (
    <div
      className={classNames(`${styles.container} ${styles.secondary}`)(
        className
      )}
      style={{ flex: `1 0 ${height}px`, margin: '0.5rem', height, ...style }}
      {...restProps}
    />
  );
}

WireframeBox.defaultProps = {
  height: 100,
};

WireframeBox.propTypes = {
  height: number,
  className: string,
  style: object,
};
