import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Blogs from './components/Blogs'
import SpecificBlog from './components/SpecificBlog'
import Admin from './components/Admin/Admin'
import AdminDashboard from './components/Admin/AdminDashboard'
import AdminLogin from './components/Admin/AdminLogin'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:blog" element={<SpecificBlog />} />
      <Route path="/admin" element={<Admin />}>
        <Route index element={<AdminDashboard />} />
        <Route path="login" element={<AdminLogin />} />
      </Route>
    </Routes>
  )
}

export default App