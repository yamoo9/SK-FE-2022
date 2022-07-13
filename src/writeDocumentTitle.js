import { MIN, MAX } from './config.js';
import { getRandomMinMax } from './utils.js';

export const TARGET_COUNT = getRandomMinMax(MIN, MAX);
export const isComplete = (count) => count >= TARGET_COUNT;

document.title = `(${TARGET_COUNT}) ${document.title}`;
