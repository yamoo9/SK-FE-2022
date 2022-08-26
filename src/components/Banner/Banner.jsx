import { css, cx } from '@emotion/css';
import { A11yHidden } from 'components';
import { useFetch } from 'hooks/useFetch';

export const Banner = ({
  url,
  width,
  height,
  className,
  children,
  ...restProps
}) => {
  const { isLoading, hasError, error, data } = useFetch(
    'http://localhost:4000/contacts'
  );

  if (isLoading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (hasError) {
    return <div role="alert">{error.message}</div>;
  }

  console.log({ contacts: data });

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
