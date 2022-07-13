import { MIN, MAX } from './config.js';
import { getRandomMinMax } from './utils.js';
export var TARGET_COUNT = getRandomMinMax(MIN, MAX);
export var isComplete = function isComplete(count) {
  return count >= TARGET_COUNT;
};
document.title = "(".concat(TARGET_COUNT, ") ").concat(document.title);