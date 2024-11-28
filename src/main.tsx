import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/home/HomePage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} > 
        <Route index element={<HomePage />}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
