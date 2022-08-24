export function testRepeat(callback, count = 10) {
  while (count--) callback();
}
