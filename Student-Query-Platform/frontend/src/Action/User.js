import axios from 'axios';
export const loginUser = (email, password)=> async (dispatch)=>{
      try {
        dispatch({
             type:"LoginRequest"
        })
        const {data} =  await axios.post('/api/v1/login',{email,password},{
            headers:{
                'Content-Type':"application/json",
            },
       })
       dispatch({
         type:"LoginSuccess",
         payload:data.user,
       })
      } catch (error) {
          dispatch({
             type:"LoginFailure",
             payload: error
            
          })
      }
};

export const loadUser =()=> async (dispatch)=>{
      try {
          dispatch({
               type:"LoadUserRequest",
          })

          const {data} = await axios.get('/api/v1/me');

          dispatch({
             type:"LoadUserSuccess",
             payload:data.user
          })
      } catch (error) {
         dispatch({
             type:"LoadUserFailure",
             payload:error
         })
      }
}



export const getAllUsers = () => async (dispatch) => {
    try {
      dispatch({
        type: "allUsersRequest",
      });

      const { data } = await axios.get("/api/v1/users");
      dispatch({
        type: "allUsersSuccess",
        payload: data.users,
      });
    } catch (error) {
      dispatch({
        type: "allUsersFailure",
        payload: error.response.data.message,
      });
    }
  };


  export const logOutUser = ()=> async (dispatch)=>{
     try {
        dispatch({
           type:"logOutRequest"
        })

        await axios.get("/api/v1/logout");

        dispatch({
           type:"logOutSuccess"
        })
      
     } catch (error) {
        dispatch({
           type:"logOutFailure"
        })
     }
  }


  export const getFollowingPost = ()=>async(dispatch)=>{
     try {
           dispatch({
             type:"getPostOfFollowingRequest",
           })

           const {data} = await axios.get("/api/v1/posts");
           dispatch({
              type:"getPostOfFollowingSuccess",
              payload:data.posts
           })
     } catch (error) {
          dispatch({
              type:"getPostOfFollowingFailure",
              payload:error
          })
     }
  }

  export const registerUser =
  (name, email, password, avatar) => async (dispatch) => {
    try {
      dispatch({
        type: "RegisterRequest",
      });

      const { data } = await axios.post(
        "/api/v1/register",
        { name, email, password, avatar },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "RegisterSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message,
      });
    }
  };


  export const getMyPosts = () => async (dispatch) => {
    try {
      dispatch({
        type: "myPostsRequest",
      });
  
      const { data } = await axios.get("/api/v1/my/posts");
      dispatch({
        type: "myPostsSuccess",
        payload: data.posts,
      });
    } catch (error) {
      dispatch({
        type: "myPostsFailure",
        payload: error.response.data.message,
      });
    }
  };



  export const getUserPosts = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "userPostsRequest",
      });
  
      const { data } = await axios.get(`/api/v1/userposts/${id}`);
      dispatch({
        type: "userPostsSuccess",
        payload: data.posts,
      });
    } catch (error) {
      dispatch({
        type: "userPostsFailure",
        payload: error.response.data.message,
      });
    }
  };

  export const getUserProfile = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "userProfileRequest",
      });
  
      const { data } = await axios.get(`/api/v1/user/${id}`);
      dispatch({
        type: "userProfileSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "userProfileFailure",
        payload: error.response.data.message,
      });
    }
  };


  export const followAndUnfollowUser = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "followUserRequest",
      });
  
      const { data } = await axios.get(`/api/v1/follow/${id}`);
      dispatch({
        type: "followUserSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "followUserFailure",
        payload: error.response.data.message,
      });
    }
  };