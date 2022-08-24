import { Headline } from './Headline.js';
import { ReactLogo } from './ReactLogo.js';
import { Button } from './Button.js';
import { disableContrast, enableContrast, playMotion, stopMotion } from './store.js';

function App(_ref) {
  var motion = _ref.motion,
      contrast = _ref.contrast;
  return React.createElement("div", {
    className: "App"
  }, React.createElement(Headline, null), React.createElement(ReactLogo, {
    motion: motion
  }), React.createElement(Button, {
    onClick: function onClick() {
      return motion ? stopMotion() : playMotion();
    }
  }, motion ? 'stop' : 'play', " motion"), React.createElement(Button, {
    style: {
      top: 82
    },
    onClick: function onClick() {
      return contrast ? disableContrast() : enableContrast();
    }
  }, contrast ? 'disable' : 'enable', " high-contrast"));
}

export default App;