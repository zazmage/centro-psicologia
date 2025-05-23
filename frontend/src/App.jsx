
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Spaces from './pages/Spaces'
import Contact from './pages/Contact'
import About from './pages/About'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
