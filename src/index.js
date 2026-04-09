import React from 'react';
import { createRoot } from 'react-dom/client';
import { FormspreeProvider } from '@formspree/react';
import './index.css';
import App from './App';
import { DarkModeProvider } from './dark-mode/DarkModeContext';

const container = document.getElementById('root');
const root = createRoot(container);
const formspreeProjectId = process.env.REACT_APP_FORMSPREE_PROJECT_ID;

const appContent = (
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);

root.render(
  <React.StrictMode>
    {formspreeProjectId ? (
      <FormspreeProvider project={formspreeProjectId}>
        {appContent}
      </FormspreeProvider>
    ) : (
      appContent
    )}
  </React.StrictMode>
);

