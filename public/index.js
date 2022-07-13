"use strict";

var _window = window,
    React = _window.React,
    ReactDOM = _window.ReactDOM,
    setInterval = _window.setInterval,
    clearInterval = _window.clearInterval;
/* Utilites ----------------------------------------------------------------- */

var getRandom = function getRandom(n) {
  return Math.round(Math.random() * n);
};

var getRandomMinMax = function getRandomMinMax() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return getRandom(max - min) + min;
};
/* DOM Scripting ------------------------------------------------------------ */


var MIN = 36;
var MAX = 99;
var FPS = 60;
var STEP = 1;
var TARGET_COUNT = getRandomMinMax(MIN, MAX);
document.title = "(".concat(TARGET_COUNT, ") ").concat(document.title);
/* React Programming -------------------------------------------------------- */

var count = 0;

var isComplete = function isComplete() {
  return count >= TARGET_COUNT;
}; // 애니메이션 종료 여부 반환 (true|false)


var reactRoot = ReactDOM.createRoot(document.getElementById('root'));

var Counter = function Counter() {
  var completed = isComplete();
  return /*#__PURE__*/React.createElement("output", {
    style: completed ? {
      animationName: 'none'
    } : null
  }, count);
};

function render() {
  reactRoot.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Counter, null)));
}

function animate() {
  var clearId = setInterval(function () {
    if (isComplete()) clearInterval(clearId);else render();
    count += STEP;
  }, 1000 / FPS);
}

animate();