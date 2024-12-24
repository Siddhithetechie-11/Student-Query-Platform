import React, { useEffect } from "react";
import "./Account.css";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts, logOutUser } from "../../Action/User";
import { Avatar } from "@mui/material";

const Account = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const logOutHandler = () => {
        dispatch(logOutUser());
    };

    const { posts } = useSelector((state) => state.myPost);
    useEffect(() => {
        dispatch(getMyPosts());
    }, [dispatch]);

    return (
        <>
            <div className="profile-background">
                <div className="left-profile">
                    <Avatar
                        src={user.avatar.url}
                        style={{ width: "100px", height: "100px" }}
                    />
                    <div className="profile-name">
                        <h2>{user.name}</h2>
                    </div>
                </div>
                <div className="right-profile">
                    <button type="submit" onClick={logOutHandler}>
                        Log Out
                    </button>
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
            </div>

            {posts ? (
                posts.map((post) => (
                    <Post
                        key={post._id}
                        caption={post.caption}
                        postImage={post.image.url}
                        ownerImage={post.owner.avatar.url}
                        ownerName={post.owner.name}
                        comments={post.comments}
                        ownerId={post.owner._id}
                        isAccount={true}
                        isDelete={true}
                    />
                ))
            ) : (
                <h1>No Post Yet</h1>
            )}
        </>
    );
};

export default Account;
