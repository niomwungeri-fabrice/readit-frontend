import axios from "../../utils/axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE, SET_INPUT } from "./actionTypes";
// const { LOCAL_BASE_API } = process.env;
export const setInput = payload => {
  return {
    type: SET_INPUT,
    payload
  };
};

export const handleLogin = ({ email, password }) => async dispatch => {
  try {
    const response = await axios.post(
      `http://localhost:5070/api/v1/auth/login`,
      {
        email,
        password
      }
    );
    const { token } = response.data;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: token
    });
    localStorage.setItem("token", token);
  } catch (error) {
    const { message } = error.response.data;
    dispatch({
      type: LOGIN_FAILURE,
      payload: message
    });
  }
};
