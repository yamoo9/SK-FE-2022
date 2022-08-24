import App from './App.js';
import { getState, update } from './store.js';

const container = document.getElementById('root');
const reactDOMRoot = ReactDOM.createRoot(container);

function render() {
  const { motion, contrast } = getState();

  if (contrast) {
    document.body.classList.add('contrastMode');
  } else {
    document.body.classList.remove('contrastMode');
  }

  reactDOMRoot.render(
    <React.StrictMode>
      <App motion={motion} contrast={contrast} />
    </React.StrictMode>
  );
}

render();

update(render);
