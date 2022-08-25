import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import 'styles/global.css';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { ErrorBoundary } from 'components';
import App from './App';

render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('root')
);
