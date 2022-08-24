import { Headline } from './Headline.js';
import { ReactLogo } from './ReactLogo.js';
import { Button } from './Button.js';
import {
  disableContrast,
  enableContrast,
  playMotion,
  stopMotion,
} from './store.js';

function App({ motion, contrast }) {
  return (
    <div className="App">
      <Headline />
      <ReactLogo motion={motion} />
      <Button onClick={() => (motion ? stopMotion() : playMotion())}>
        {motion ? 'stop' : 'play'} motion
      </Button>
      <Button
        style={{ top: 82 }}
        onClick={() => (contrast ? disableContrast() : enableContrast())}
      >
        {contrast ? 'disable' : 'enable'} high-contrast
      </Button>
    </div>
  );
}

export default App;
