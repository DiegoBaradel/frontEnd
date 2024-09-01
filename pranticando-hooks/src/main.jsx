import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyled from './components/globalStyled/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled/>
    <App />
  </StrictMode>,
)
