import 'styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'components';
import { AuthProvider } from 'contexts/auth';
// import { ThemeProvider } from 'contexts/theme';
// import { ThemeProvider } from 'styled-components';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
);
