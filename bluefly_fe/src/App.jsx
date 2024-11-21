import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Nopage from './pages/Nopage.jsx'
import Home from './pages/Home.jsx'
import CreateProduct from './pages/CreateProduct.jsx'
import User from './pages/UserList.jsx'
import EditUser from './pages/EditUser.jsx'
import UserProduct from './pages/Userproduct.jsx'
import EditProduct from './pages/EditProduct.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import SortType from './pages/SortType.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [heading, setHeading] = useState(() => {
    return (JSON.parse(localStorage.getItem('heading')) || 'Heading')
  });

  localStorage.setItem('heading', JSON.stringify(heading))
  console.log(heading)
  return (
    <>
      <div className="header">
        <Header heading={heading} setHeading={setHeading} />
      </div>
      {/* <div class="content"> */}
      <div className="main">
        <Routes>
          <Route path='/' element={<Home
            heading={heading} setHeading={setHeading} />} />
          <Route path='/cart' element={<CartDrawer />} />
          <Route path='/productdetail' element={<ProductDetail />} />
          <Route path='/editproduct' element={<EditProduct />} />
          <Route path='/edituser' element={<EditUser />} />
          <Route path='/listuser' element={<User />} />
          <Route path='/userproduct' element={<UserProduct />} />
          <Route path='/createproduct' element={<CreateProduct />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sort' element={<SortType />} />
          <Route path='/*' element={<Nopage />} />
        </Routes>
        <Footer />
      </div>

      {/* </div> */}
    </>

  )
}

export default App
