/* create store ------------------------------------------------------------- */

function createStore(reducer, preloadedState) {
  let state = preloadedState;
  let listeners = [];

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    subscribe(listener) {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => !Object.is(l, listener));
      };
    },
  };
}

/* combine reducers --------------------------------------------------------- */

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    for (const [reducerPath, reducer] of Object.entries(reducers)) {
      state[reducerPath] = reducer(state[reducerPath], action);
    }
    return state;
  };
};

/* create action ------------------------------------------------------------ */

function createAction(type) {
  const actionCreator = () => ({
    type,
  });

  actionCreator.type = type;
  actionCreator.toString = () => type;

  return actionCreator;
}

/* action creators ---------------------------------------------------------- */

const stopMotionAction = createAction('motion/stop');
const playMotionAction = createAction('motion/play');
const enableContrastAction = createAction('contrast/enable');
const disableContrastAction = createAction('contrast/disable');

/* reducers ----------------------------------------------------------------- */

const motionReducer = (state = true, action) => {
  switch (action.type) {
    case stopMotionAction.type:
      return false;
    case playMotionAction.type:
      return true;
    default:
      return state;
  }
};

const contrastReducer = (state = false, action) => {
  switch (action.type) {
    case disableContrastAction.type:
      return false;
    case enableContrastAction.type:
      return true;
    default:
      return state;
  }
};

/* root reducer ------------------------------------------------------------- */

const rootReducer = combineReducers({
  motion: motionReducer,
  contrast: contrastReducer,
});

/* store -------------------------------------------------------------------- */

const store = createStore(rootReducer, { motion: true, contrast: false });

/* get/update store methods ------------------------------------------------- */

export const getState = () => store.getState();
export const update = (listener) => store.subscribe(listener);

/* update methods ----------------------------------------------------------- */

export const stopMotion = () => store.dispatch(stopMotionAction());
export const playMotion = () => store.dispatch(playMotionAction());
export const enableContrast = () => store.dispatch(enableContrastAction());
export const disableContrast = () => store.dispatch(disableContrastAction());
