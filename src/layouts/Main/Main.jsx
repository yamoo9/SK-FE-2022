import { string } from 'prop-types';
import styles from './Main.module.scss';
import { classNames } from 'utils';

export function Main({ id, className, ...restProps }) {
  return (
    <main
      id={id}
      tabIndex={-1}
      className={classNames(`${styles.container} wireframeBox`)(className)}
      {...restProps}
    />
  );
}

Main.defaultProps = {
  id: 'content',
};

Main.propTypes = {
  id: string,
  className: string,
};
