import fidgetPath, {
  ReactComponent as Fidget,
} from 'assets/fidget.spinner.svg';

import { css } from '@emotion/css';

const spinnerStyle = css`
  margin: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

console.log(fidgetPath); // path string
// SVGR: React Component
// console.log(<Fidget title="로딩 중...." />);

export const Spinner = ({ label, title, ...restProps }) => {
  return (
    <figure className={spinnerStyle}>
      <Fidget title={title} {...restProps} />
      <figcaption>{label}</figcaption>
    </figure>
  );
};

Spinner.defaultProps = {
  label: '로딩 중...',
};
