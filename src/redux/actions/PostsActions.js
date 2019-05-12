import axios from "../../utils/axios";
import { SET_POST, POST_FAIL, POST_SUCCESS } from "./actionTypes";
// const { LOCAL_BASE_API } = process.env;

export const setPosts = payload => {
  return {
    type: SET_POST,
    payload
  };
};

export const handlePost = ({ title, content }) => async dispatch => {
  try {
    const response = await axios.post(`http://localhost:5070/api/v1/posts`, {
      title,
      content
    });
    const { post, message } = response.data;
    dispatch(setPosts(post));
    dispatch({
      type: POST_SUCCESS,
      payload: message
    });
  } catch (error) {
      console.log(error.response.data);
    const { message } = error.response.data;
    dispatch({
      type: POST_FAIL,
      payload: message
    });
  }
};
