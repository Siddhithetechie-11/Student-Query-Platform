import React from 'react'
import './Header.css'
import logo  from '../Nav/logo2.png'

const Header = () => {
  return (
    <>
     <div className="header-nav">
        <div className="header-left-section">
          <img src={logo } alt="" />
        </div>
        <div className="header-right-section">
          <a href="/login">Login</a>
          <a href="/register">Signup</a>
        </div>
      </div>
    </>
  )
}

export default Header