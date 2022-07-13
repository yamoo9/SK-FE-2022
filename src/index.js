const { React, ReactDOM } = window;

/* Utilites ----------------------------------------------------------------- */

const getRandom = (n) => Math.round(Math.random() * n);
const getRandomMinMax = (min = 0, max = 100) => getRandom(max - min) + min;

/* DOM Scripting ------------------------------------------------------------ */

const MIN = 47;
const MAX = 99;
const TARGET_COUNT = getRandomMinMax(MIN, MAX);

document.title = `(${TARGET_COUNT}) ${document.title}`;

/* React Programming -------------------------------------------------------- */

let count = 0;
const isComplete = () => count >= TARGET_COUNT; // 애니메이션 종료 여부 반환 (true|false)

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

// React Component (Reusability) → React Element
// Functional Component
// const Counter = () => <output style={{ animationName: 'none' }}>9</output>;

// class Component
class Counter extends React.Component {
  render() {
    return <output style={{ animationName: 'none' }}>9</output>;
  }
}

reactRoot.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
