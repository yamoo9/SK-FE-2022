/* Utilites ----------------------------------------------------------------- */
export var getRandom = function getRandom(n) {
  return Math.round(Math.random() * n);
};
export var getRandomMinMax = function getRandomMinMax() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return getRandom(max - min) + min;
};