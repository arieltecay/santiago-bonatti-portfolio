import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { reportWebVitals, initializeClarity } from './analytics-tracker.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Inicializar mediciones de Performance
reportWebVitals();

// Inicializar Microsoft Clarity (comportamiento visual) solo en producción
if (import.meta.env.PROD) {
  const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;
  if (CLARITY_ID) {
    initializeClarity(CLARITY_ID);
  }
}
