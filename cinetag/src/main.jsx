import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyled from './GlobalStyled'
import AppRoutes from './AppRoutes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled/>
    <AppRoutes />
  </StrictMode>,
)
