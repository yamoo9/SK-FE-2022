/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { classNames } from 'utils';
import { WireframeBox } from 'components';
import styles from './Dashboard.module.scss';

/* -------------------------------------------------------------------------- */

export default function Dashboard() {
  return (
    <div className={classNames('page')(styles.container)}>
      <h2 tabIndex={0} className={styles.headline}>
        대시보드
      </h2>
      <WireframeBox className={styles.grid} style={{ height: null }}>
        <WireframeBox className={styles.gridItem1} />
        <WireframeBox className={styles.gridItem2} style={{ height: null }}>
          <WireframeBox className={styles.child1} />
          <WireframeBox className={styles.child2} />
        </WireframeBox>
      </WireframeBox>
    </div>
  );
}
