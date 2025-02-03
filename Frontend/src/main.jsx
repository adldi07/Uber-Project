import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import userContext from './contexts/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <userContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </userContext>
  </StrictMode>,
)
