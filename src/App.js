import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'
import SingleUser from './pages/SingleUser'

const App = () => {
  return (
      <div>
         <BrowserRouter>
            <Navbar/>
            <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path='/add/user' element={<AddUser/>}/>
               <Route path='/edit/:id' element={<EditUser/>}/>
               <Route path='/user/:id' element={<SingleUser/>}/>
            </Routes>
         </BrowserRouter>   
      </div>
  )
}

export default App