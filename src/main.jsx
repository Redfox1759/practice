import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function Displayimage (){
  return(
   <img src="/src/assets/-Madara-Uchiha.jpg" alt="" srcset=""></img>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Displayimage />
  </StrictMode>,
)
