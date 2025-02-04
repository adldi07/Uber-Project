import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './contexts/UserContext.jsx'
import CaptianContext from './contexts/captianContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptianContext>
      <UserContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext>
    </CaptianContext>
  </StrictMode>,
)
