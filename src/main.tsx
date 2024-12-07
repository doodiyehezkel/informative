import { 
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider 
} from 'react-router'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import HomePage from './pages/home/HomePage.tsx'
import ContactUs from './pages/contact-us/ContactUs.tsx'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path='contact-us' element={<ContactUs />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
