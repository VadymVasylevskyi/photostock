import {BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import UserPage from './pages/UserPage'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:id' element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  )
}
