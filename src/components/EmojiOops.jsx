import oopsPath from '@/assets/oops.png';

export const EmojiOops = ({ src = oopsPath, alt = '', ...restProps }) => (
  <img src={src} alt={alt} {...restProps} />
);
