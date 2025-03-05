//ARQUIVO PRINCIPAL
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Homes'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <h1>ola react</h1>
  </StrictMode>,
)
