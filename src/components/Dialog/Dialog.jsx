/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import styles from './Dialog.module.scss';
import { createPortal } from 'react-dom';
import { bool, func } from 'prop-types';
import { useScrollPrevent } from 'hooks';

export const Dialog = ({
  hasDim,
  showDialog,
  cancelNavigation,
  confirmNavigation,
  ...restProps
}) => {
  useScrollPrevent(showDialog);

  return createPortal(
    <div className={styles.container} hidden={!showDialog} {...restProps}>
      <div className={styles.dialogContents}>
        <header>
          <h2 className={styles.headline}>경고!</h2>
        </header>
        <p>
          <b>작성 중인 내용이 저장되지 않았습니다.</b>
          <br />
          이대로 페이지를 떠나시겠습니까?
        </p>
        <footer>
          <button
            type="button"
            className={styles.button}
            onClick={confirmNavigation}
          >
            이동
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={cancelNavigation}
          >
            취소
          </button>
        </footer>
      </div>
      {hasDim && <div className={styles.dim} onClick={cancelNavigation} />}
    </div>,
    document.getElementById('dialog')
  );
};

Dialog.defaultProps = {
  hasDim: true,
};

Dialog.propTypes = {
  hasDim: bool,
  showDialog: bool.isRequired,
  cancelNavigation: func.isRequired,
  confirmNavigation: func.isRequired,
};
