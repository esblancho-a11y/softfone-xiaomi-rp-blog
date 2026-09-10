import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PocoX7ProReview from './pages/PocoX7ProReview.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/poco-x7-pro-review" element={<PocoX7ProReview />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
