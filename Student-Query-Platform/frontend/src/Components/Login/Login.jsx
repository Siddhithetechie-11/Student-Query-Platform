import React from 'react'
import './Login.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../Action/User'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));

  }
  return (
    <>
      <div className="login">
        <h1>Sign In To Your Account</h1>
      </div>
      <div className="login-form" >
        <form className="left-part" onSubmit={loginHandler}>
          <h3>Login</h3>
          <input type="email" placeholder='Enter Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input type="password" placeholder='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button type='submit'>Login</button>
        </form>
        <div className="right-part">
          <h3>Register Now</h3>
          <p>When you Register, you agree to our User Agreement and acknowledge reading our User Privacy Notice.</p>
          <a href="/register"><button>Create an Account</button></a>
        </div>
      </div>
    </>
  )
}

export default Login