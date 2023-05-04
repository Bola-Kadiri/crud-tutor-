import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-link'>
         <h3>Logo</h3>
         <div className='menu'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/add/user'>Add Users</Link>
         </div>
    </div>
  )
}

export default Navbar