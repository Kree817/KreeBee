import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Blog from './Components/Blog'
import BlogDetail from './Components/BlogDetail';
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import AdminDashboard from './Components/AdminDashboard'
import AdminBlog from './Components/AdminBlog'
import AdminEditBlog from './Components/AdminEditBlog'
import AdminView from './Components/AdminBlogView'
import Login from './Components/Login'
import Signup from './Components/Signup'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='blog-detail' element={<BlogDetail />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/admin-dashboard' element={<AdminDashboard />}></Route>
          <Route path='/admin-blog' element={<AdminBlog />}></Route>
          <Route path='/admin-edit-blog/:id' element={<AdminEditBlog />}></Route>
          <Route path='/admin-view' element={<AdminView />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>



        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
