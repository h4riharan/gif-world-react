import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App apiKey={apiKey} />
  </StrictMode>,
)
