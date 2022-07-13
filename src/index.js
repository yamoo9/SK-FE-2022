import './reloadBrowser.js';
import { STEP, FPS } from './config.js';
import { TARGET_COUNT, isComplete } from './writeDocumentTitle.js';
import { RandomCountUp } from './components/RandomCountUp.js';

/* React Programming -------------------------------------------------------- */

const { React, ReactDOM, setInterval, clearInterval } = window;

let count = 0;

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

function render(completed) {
  reactRoot.render(
    <React.StrictMode>
      <RandomCountUp count={count} isComplete={completed} />
    </React.StrictMode>
  );
}

function animate() {
  const clearId = setInterval(() => {
    let completed = isComplete(count);
    if (completed) clearInterval(clearId);
    else count += STEP;
    render(completed);
  }, 1000 / FPS);
}

animate();
