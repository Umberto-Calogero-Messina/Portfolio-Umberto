import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './i18n'; // Importa la configurazione di i18next
import './index.css'; // CSS globale dell'app
import { GlobalStyles } from '/src/Styles/GlobalStyles.js';
import { LanguageProvider } from './contexts/LanguageContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <GlobalStyles />
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
