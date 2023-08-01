import React from 'react'
import ReactDOM from 'react-dom/client'
import '@core/i18n'

import App from './App.tsx'
import { ThemeManagerProvider } from '@core/theme/ThemeManager.tsx'
import { GlobalStyles } from '@core/theme/GlobalStyles.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeManagerProvider>
      <GlobalStyles />
      <App />
    </ThemeManagerProvider>
  </React.StrictMode>,
)
