//ARQUIVO PRINCIPAL
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from '.'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="banner-promo">
      <div className="banner-texto">
        <span>Sign up and get 20% off to your first order.</span>
        <span className="sign-up-now">Sign Up Now</span>
    </div>

      <div className="navbar">
      <button className="menu-toggle">☰</button>
      <b className="logo">SHOP.CO</b>

      </div>
    </div>
    <Home />
  </StrictMode>,
)
