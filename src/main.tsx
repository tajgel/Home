import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import Weather from './assets/Weather.tsx'
import Notes from './assets/Notes.tsx'
import Callendar from './assets/Callendar.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/weather' element={<Weather />} />
      <Route path='/notes' element={<Notes />} />
      <Route path='/callendar' element={<Callendar />} />
    </Routes>
  </BrowserRouter>
)
