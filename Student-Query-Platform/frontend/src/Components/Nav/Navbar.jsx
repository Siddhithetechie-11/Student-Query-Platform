import React from 'react'
import './Navbar.css'
import logo  from '../Nav/logo2.png'
const Header = () => {
  return (
    <>
      <div className="navbar-section">
        <div className="image-section-left">
          <img src={logo} alt="" />
        </div>
        <div className="right-section">
          <a href="/">Home</a>
          <a href="/users">Users</a>
          <a href="/profile">Profile</a>
          <a href="/newquery">
            <button>Create Query</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Header