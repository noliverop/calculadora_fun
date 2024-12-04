import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Maqueta from './Maqueta.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <>
    <Maqueta />
    </>
  </StrictMode>,
)
