function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function createStore(reducer, preloadedState) {
  var state = preloadedState;
  var listeners = [];
  return {
    getState: function getState() {
      return state;
    },
    dispatch: function dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(function (listener) {
        return listener();
      });
    },
    subscribe: function subscribe(listener) {
      listeners.push(listener);
      return function () {
        listeners = listeners.filter(function (l) {
          return !Object.is(l, listener);
        });
      };
    }
  };
}

var combineReducers = function combineReducers(reducers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    for (var _i = 0, _Object$entries = Object.entries(reducers); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          reducerPath = _Object$entries$_i[0],
          reducer = _Object$entries$_i[1];

      state[reducerPath] = reducer(state[reducerPath], action);
    }

    return state;
  };
};

function createAction(type) {
  var actionCreator = function actionCreator() {
    return {
      type: type
    };
  };

  actionCreator.type = type;

  actionCreator.toString = function () {
    return type;
  };

  return actionCreator;
}

var stopMotionAction = createAction('motion/stop');
var playMotionAction = createAction('motion/play');
var enableContrastAction = createAction('contrast/enable');
var disableContrastAction = createAction('contrast/disable');

var motionReducer = function motionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case stopMotionAction.type:
      return false;

    case playMotionAction.type:
      return true;

    default:
      return state;
  }
};

var contrastReducer = function contrastReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case disableContrastAction.type:
      return false;

    case enableContrastAction.type:
      return true;

    default:
      return state;
  }
};

var rootReducer = combineReducers({
  motion: motionReducer,
  contrast: contrastReducer
});
var store = createStore(rootReducer, {
  motion: true,
  contrast: false
});
export var getState = function getState() {
  return store.getState();
};
export var update = function update(listener) {
  return store.subscribe(listener);
};
export var stopMotion = function stopMotion() {
  return store.dispatch(stopMotionAction());
};
export var playMotion = function playMotion() {
  return store.dispatch(playMotionAction());
};
export var enableContrast = function enableContrast() {
  return store.dispatch(enableContrastAction());
};
export var disableContrast = function disableContrast() {
  return store.dispatch(disableContrastAction());
};