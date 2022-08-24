import { getRandomMinMax, testRepeat } from './utils';

function rollingDice() {
  return getRandomMinMax(1, 6);
}

testRepeat(() => {
  console.log(rollingDice());
}, 100);
