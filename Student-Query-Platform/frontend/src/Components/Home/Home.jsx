import React, { useEffect } from 'react'
import Post from '../Post/Post'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { getFollowingPost } from '../../Action/User';
import Loader from '../Loader/Loader'
import { useAlert } from "react-alert";


const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loding, posts, error } = useSelector(state => state.postOfFollowings);
  useEffect(() => {
    dispatch(getFollowingPost());
  }, [dispatch])

  const { error: likeError, message } = useSelector((state) => state.like);



  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (likeError) {
      alert.error(likeError);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, message, likeError, dispatch]);

  return (
    loding ? <Loader /> : (
      <>
        <div className="upper-part">
          <div className="description">
            <h1>HAVE A QUESTION?</h1>
            <p>If you have any question you can ask below or enter what you are looking for!</p>

            <div className="input-container">
              <input type="text" placeholder='Search Here' />
              <button>Search</button>
            </div>
          </div>
        </div>

        {
          posts ? posts.map((post) => (
            <Post
              key={post._id}
              postImage={post.image.url}
              postId={post._id}
              caption={post.caption}
              // ownerImage={post.owner.avatar.url}
              // ownerName={post.owner.name}
              // ownerId={post.owner._id}
              comments={post.comments}
            />
          )) :
            <h2>No Post Yet</h2>
        }




      </>
    )
  )
}

export default Home