import axios from "axios"
export const addCommentOnPost = (id, comment) => async (dispatch) => {
    try {
      dispatch({
        type: "addCommentRequest",
      });
  
      const { data } = await axios.put(
        `/api/v1/post/comment/${id}`,
        {
          comment,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "addCommentSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "addCommentFailure",
        payload: error.response.data.message,
      });
    }
  };


  export const deleteCommentOnPost = (id, commentId) => async (dispatch) => {
    try {
      dispatch({
        type: "deleteCommentRequest",
      });
  
      const { data } = await axios.delete(`/api/v1/post/comment/${id}`, {
        data: { commentId },
      });
      dispatch({
        type: "deleteCommentSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "deleteCommentFailure",
        payload: error.response.data.message,
      });
    }
  };

  export const createNewPost = (caption, image) => async (dispatch) => {
    try {
      dispatch({
        type: "newPostRequest",
      });
  
      const { data } = await axios.post(
        `/api/v1/post/upload`,
        {
          caption,
          image,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "newPostSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "newPostFailure",
        payload: error.response.data.message,
      });
    }
  };