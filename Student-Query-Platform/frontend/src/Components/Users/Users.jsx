import React from 'react'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import './Users.css'

const Users = ({
  userId,
  name,
  avator,
  followers,
  followings,
  post
}) => {
  return (
    <>

      <div className="user-box">
        <div className="first-section">
          <div className="image-name-section">
            <Avatar src={avator}
              style={{ width: '50px', height: '50px' }}
            />
            <h3>{name}</h3>
          </div>
          <div className="button-section">
            
           <Link to={`/user/${userId}`} className='user-btn'>
           <button> 
              Show More
            </button>
           </Link>
          </div>
        </div>
        <div className="second-section">
          <div className="column-box">
            <h2>{post}</h2>
            <h5>Post</h5>
          </div>
          <div className="column-box">
            <h2>{followers}</h2>
            <h5>Followers</h5>
          </div>
          <div className="column-box">
            <h2>{followings}</h2>
            <h5>Followings</h5>
          </div>
        </div>
      </div>

    </>
  )
}

export default Users