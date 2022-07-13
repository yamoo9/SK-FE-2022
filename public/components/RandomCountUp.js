import { isComplete } from '../writeDocumentTitle.js';
export var RandomCountUp = function RandomCountUp(_ref) {
  var count = _ref.count,
      isComplete = _ref.isComplete;
  return /*#__PURE__*/React.createElement("output", {
    style: isComplete ? {
      animationName: 'none'
    } : null
  }, count);
};