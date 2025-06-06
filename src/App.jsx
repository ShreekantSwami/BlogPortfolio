import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Blogs from './components/Blogs'
import SpecificBlog from './components/SpecificBlog'
import Admin from './components/Admin/Admin'
import AdminLogin from './components/Admin/AdminLogin'
import AdminDashboard from './components/Admin/AdminDashboard'
import AdminRegister from './components/Admin/AdminRegister'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blog" element={<SpecificBlog />} />
        <Route path="/admin" >
          <Route index element={<AdminDashboard />} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="register" element={<AdminRegister />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
export default App