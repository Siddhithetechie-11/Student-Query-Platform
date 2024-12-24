import React, { useEffect, useState } from 'react'
import './Allusers.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../Action/User'
import Loader from '../Loader/Loader';
import Users from "../Users/Users";



const Allusers = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { loading, users } = useSelector(state => (state.allUsers));

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllUsers(name));
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (

    loading ? <Loader /> : (
      <>
        <form className="search-box" onSubmit={submitHandler}>
          <input
            type='text'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Search for a User' 
          />
          {/* <button type='submit'>Search</button> */}
          
        </form>

        <div className="main-box">

          {
            users ? users.map((user) => (
              <Users
                userId={user._id}
                name={user.name}
                avator={user.avatar.url}
                followers={user.followers.length}
                followings={user.following.length}
                post={user.posts.length}
              />
            )) :
              <h2>No Users Yet</h2>
          }
        </div>
      </>
    )
  )
}

export default Allusers