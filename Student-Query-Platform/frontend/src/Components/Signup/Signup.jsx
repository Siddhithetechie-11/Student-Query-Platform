import React, {  useState } from 'react'
import Avatar from '@mui/material/Avatar'
import {useDispatch, useSelector} from 'react-redux';
import './Signup.css'
import { registerUser } from '../../Action/User';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();
  const {loading } = useSelector((state)=>state.user);
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };
  const submitHandler = (e)=>{
     e.preventDefault();
     dispatch(registerUser(name,email,password,avatar));
  }

  
  
  return (
    <>
      <div className="signup">
        <h1>Create New Account</h1>
      </div>
      <div className="signup-form">
        <form className='register' onSubmit={submitHandler}>
          <h2>Signup</h2>
          <Avatar
            src={avatar}
            alt="User"
            sx={{ height: "10vmax", width: "10vmax" }}
            className='pic-shift'
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <br />

          <input
            type="text"
            value={name}
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button disabled={loading}  type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    </>
  )
}

export default Signup