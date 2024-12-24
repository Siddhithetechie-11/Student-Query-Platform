import React, { useState } from 'react'
import './Post.css'
import { Avatar, Button, Dialog, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addCommentOnPost } from '../../Action/Post'
import { getFollowingPost } from '../../Action/User'
import CommentCard from '../CommentCard/CommentCard'
const Post = ({
  postId,
  caption,
  postImage,
  comments = [],
  ownerImage,
  ownerName,
  ownerId,
  isDelete = false,
  isAccount = false,

}) => {

  const [commentValue, setCommentValue] = useState("");
  const [commentToggle, setCommentToggle] = useState(false);
  const dispatch = useDispatch();
  // const {posts} = useSelector((state)=>state.postOfFollowings);

  const addCommentHandler = async (e) => {
    e.preventDefault();
    await dispatch(addCommentOnPost(postId, commentValue));

    if (isAccount) {
      console.log("hello");
    } else {
      dispatch(getFollowingPost());
    }
  }

  const [showFullScreen, setShowFullScreen] = useState(false);

  const handleImageClick = () => {
    setShowFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setShowFullScreen(false);
  };
  return (
    <>
      <div className="container">
        <div className="main-section">
          <div className="profile-section">
            <Avatar src={ownerImage} />
          </div>

          <div className="post-description-section">
            <h3>{caption}</h3>
            <p>{ownerName}</p>
          </div>

          <div className="post-query-image-section">
            <img src={postImage} alt="" onClick={handleImageClick} />
          </div>
        </div>

        <div className="second-button-section">
          <button onClick={() => setCommentToggle(!commentToggle)}>Give Solution</button>
        </div>
        {showFullScreen && (
          <div
            className="fullscreen-overlay"
            onClick={handleCloseFullScreen}
          >
            <div className="fullscreen-image">
              <img src={postImage} alt="Full Screen" />
            </div>
          </div>
        )}

      </div>

      <Dialog
        open={commentToggle}
        onClose={() => setCommentToggle(!commentToggle)}
      >
        <div className="DialogBox">
          <Typography variant="h4">Answers</Typography>

          <form className="commentForm" onSubmit={addCommentHandler}>
            <input
              type="text"
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              placeholder="Comment Here..."
              required
            />

            <Button type="submit" variant="contained">
              Add
            </Button>
          </form>

          {comments.length > 0 ? (
            comments.map((item) => (
              <CommentCard
                userId={item.user._id}
                name={item.user.name}
                avatar={item.user.avatar.url}
                comment={item.comment}
                commentId={item._id}
                key={item._id}
                postId={postId}
                isAccount={isAccount}
              />
            ))
          ) : (
            <Typography>No Answers Yet</Typography>
          )}
        </div>
      </Dialog>
    </>
  )
}

export default Post