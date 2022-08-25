import { css, cx } from '@emotion/css';
import { A11yHidden } from 'components';

export const Banner = ({
  url,
  width,
  height,
  className,
  children,
  ...restProps
}) => {
  return (
    <figure
      className={css`
        margin: 0;
      `}
      {...restProps}
    >
      <img
        className={cx(
          css`
            width: ${typeof width === 'number' ? `${width}px` : width};
            height: ${typeof height === 'number' ? `${height}px` : height};
          `,
          className
        )}
        src={`${process.env.PUBLIC_URL}/assets/${url}`}
        alt=""
      />
      <A11yHidden as="figcaption">{children}</A11yHidden>
    </figure>
  );
};

Banner.defaultProps = {
  width: 400,
  height: 800,
  className: '',
};
