import { isComplete } from '../writeDocumentTitle.js';

export const RandomCountUp = ({ count, isComplete }) => {
  return (
    <output style={isComplete ? { animationName: 'none' } : null}>
      {count}
    </output>
  );
};
