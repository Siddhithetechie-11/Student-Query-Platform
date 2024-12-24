import React from 'react'
import './Footer.css'
// import logo_img from '../Footer/logo.png'

const Footer = () => {

  const handleClick = ()=>{
     alert("successfully submit")
  }
  return (
    <>

      <footer>
        <div className="footer-container">
          <div className="footer-logo">
    
            <h2>Student Query</h2>
            <p>SOLUTIONS OF ALL THE PROBLEMS.</p>
            
          </div>
          <div className="footer-links">
            <div className="platform">
              <h3>Platform</h3>
              <ul>
                <a href="#"><li>How it Works</li></a>
                <a href="#"><li>Checkout</li></a>
              
              </ul>
            </div>
            <div className="learning">
              <h3>Learn</h3>
              <ul>
                <a href="#"><li>Resources</li></a>
                <a href="#"><li>Blog</li></a>
                <a href="#"><li>FAQs</li></a>
              </ul>
            </div>
            <div className="About">
              <h3>About</h3>
              <ul>
                <a href="#"><li>Privacy Policy</li></a>
                <a href="#"><li>Team</li></a>
                <a href="#"><li>Partners</li></a>
                <a href="#"><li>Contact Us</li></a>
              </ul>
            </div>
          </div>
          <div className="footer-contactus">
            <h2>Contact US</h2>
            <button type='submit' onClick={handleClick}>Get in touch</button>
          </div>
        </div>
        <div className="copywright-tag">copyright@2024</div>
      </footer>
    </>
  )
}

export default Footer