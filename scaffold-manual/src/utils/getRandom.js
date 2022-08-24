import { throwError } from './throwError';

export function getRandom(n) {
  return Math.round(Math.random() * n);
}

export const getRandomMinMax = (min = 0, max = 100) => {
  if (min >= max) throwError('min 값이 max 값보다 크거나 같습니다.');
  return getRandom(max - min) + min;
};
