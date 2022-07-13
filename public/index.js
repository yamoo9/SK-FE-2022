import './reloadBrowser.js';
import { STEP, FPS } from './config.js';
import { TARGET_COUNT, isComplete } from './writeDocumentTitle.js';
import { RandomCountUp } from './components/RandomCountUp.js';
/* React Programming -------------------------------------------------------- */

var _window = window,
    React = _window.React,
    ReactDOM = _window.ReactDOM,
    setInterval = _window.setInterval,
    clearInterval = _window.clearInterval;
var count = 0;
var reactRoot = ReactDOM.createRoot(document.getElementById('root'));

function render(completed) {
  reactRoot.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(RandomCountUp, {
    count: count,
    isComplete: completed
  })));
}

function animate() {
  var clearId = setInterval(function () {
    var completed = isComplete(count);
    if (completed) clearInterval(clearId);else count += STEP;
    render(completed);
  }, 1000 / FPS);
}

animate();