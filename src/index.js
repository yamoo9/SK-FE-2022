import { log, getNode } from './utils';

log(
  '안녕!! React 🤭',
  `
  font-size: 3rem;
  font-weight: 700;
  color: #331595;
`
);

const rootElement = getNode('#root');

rootElement.style.cssText = `
  background: #ff0;
  height: 100vh;
`;
