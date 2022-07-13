const { React, ReactDOM, setInterval, clearInterval } = window;

/* Utilites ----------------------------------------------------------------- */

const getRandom = (n) => Math.round(Math.random() * n);
const getRandomMinMax = (min = 0, max = 100) => getRandom(max - min) + min;

/* DOM Scripting ------------------------------------------------------------ */

const MIN = 36;
const MAX = 99;
const FPS = 60;
const STEP = 1;

const TARGET_COUNT = getRandomMinMax(MIN, MAX);

document.title = `(${TARGET_COUNT}) ${document.title}`;

/* React Programming -------------------------------------------------------- */

let count = 0;
const isComplete = () => count >= TARGET_COUNT; // 애니메이션 종료 여부 반환 (true|false)

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

const Counter = () => {
  let completed = isComplete();
  return (
    <output style={completed ? { animationName: 'none' } : null}>
      {count}
    </output>
  );
};

function render() {
  reactRoot.render(
    <React.StrictMode>
      <Counter />
    </React.StrictMode>
  );
}

function animate() {
  const clearId = setInterval(() => {
    if (isComplete()) clearInterval(clearId);
    else render();
    count += STEP;
  }, 1000 / FPS);
}

animate();
