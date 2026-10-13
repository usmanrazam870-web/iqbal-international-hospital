import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import Patient from './pages/Patient'
import Admin from './pages/Admin'
import Doctor from './pages/Doctor';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      
      
      
      
    </div>
  )
}

export default App
