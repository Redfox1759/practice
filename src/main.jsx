import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const madara = <img src="/src/assets/-Madara-Uchiha.jpg" alt="" srcset="">

function Displayimage (){
  return(
    madara
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Displayimage />
  </StrictMode>,
)
