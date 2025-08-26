import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import '@/assets/styles/main.css'
import App from './App.tsx'

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
