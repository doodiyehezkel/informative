import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/home/HomePage.tsx'
import ContactUs from './pages/contact-us/ContactUs.tsx'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} > 
        <Route index element={<HomePage />}/>
        <Route path='contact-us' element={<ContactUs />}/>
      </Route>
    </Routes>
  </HashRouter>
)
