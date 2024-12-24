import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { followAndUnfollowUser, getUserPosts, getUserProfile } from '../../Action/User'
import { useParams } from 'react-router-dom'
import { useAlert } from "react-alert";
import Loader from '../Loader/Loader'
import { Avatar } from '@mui/material'
const UserProfile = () => {
    const { user: me } = useSelector((state) => state.user);
    const { posts,loading ,error } = useSelector((state) => state.userPosts);
    const { 
        user ,
        loading: userLoading,
        error: userError, 
    } = useSelector((state) => state.userProfile);
    const{
        error: followError,
        message,
        loading: followLoading,
    } = useSelector((state)=>state.like);
    const dispatch = useDispatch();
    const [following, setFollowing] = useState(false);
    const [myProfile, setMyProfile] = useState(false);
    const alert = useAlert();

    const paramas = useParams();

    const followHandler = async() => {
        setFollowing(!following);
      await  dispatch(followAndUnfollowUser(user._id));
        dispatch(getUserProfile(paramas.id));

    }

   

    useEffect(() => {
        dispatch(getUserPosts(paramas.id));
        dispatch(getUserProfile(paramas.id));
    }, [dispatch,  paramas.id])

    useEffect(() => {
        if (me._id === paramas.id) {
          setMyProfile(true);
        }
        if (user) {
          user.followers.forEach((item) => {
            if (item._id === me._id) {
              setFollowing(true);
            } else {
              setFollowing(false);
            }
          });
        }
      }, [user, me._id, paramas.id]);


    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch({ type: "clearErrors" });
        }
    
        if (followError) {
          alert.error(followError);
          dispatch({ type: "clearErrors" });
        }
    
        if (userError) {
          alert.error(userError);
          dispatch({ type: "clearErrors" });
        }
        if (message) {
          alert.success(message);
          dispatch({ type: "clearMessage" });
        }
      }, [alert, error, message, followError, userError, dispatch]);


    return (
       loading===true || userLoading===true?(
        <Loader/>
       ):(
        <>

        <div className="profile-background">
           {
             user && (
                <>
                   <div className="left-profile">
                {/* <img src={user.avatar.url} alt="" /> */}
                <Avatar
                        src={user.avatar.url}

                        style={{ width: '100px', height: '100px' }}
                    />
                <div className="profile-name">
                    <h2>{user.name}</h2>

                </div>
            </div>
            <div className="right-profile">
                {
                    myProfile ? null : (
                        <button type='submit' disabled={followLoading} onClick={followHandler} style={{ background: following ? "#cf2e2e" : "#cf2e2e" }}>
                            {
                                following ? "UnFollow" : "Follow"
                            }
                        </button>
                    )
                }
                <div className="details">
                    <div className="page">
                        <h1>{user.followers.length}</h1>
                        <br />
                        <p>Followers</p>
                    </div>
                    <div className="page">
                        <h1>{user.following.length}</h1>
                        <br />
                        <p>Followings</p>
                    </div>
                    <div className="page">
                        <h1>{user.posts.length}</h1>
                        <br />
                        <p>Post</p>
                    </div>
                </div>
            </div>
                </>
             )
           }
        </div>

        {
            posts ? posts.map((post) => (
                <Post
                    key={post._id}
                    caption={post.caption}
                    postImage={post.image.url}
                    ownerImage={post.owner.avatar.url}
                    ownerName={post.owner.name}
                    comments={post.comments}
                    ownerId={post.owner._id}
                    

                />
            )) :
                <h1>User has not made any Post Yet</h1>
        }


    </>
       )
    )
}



export default UserProfile