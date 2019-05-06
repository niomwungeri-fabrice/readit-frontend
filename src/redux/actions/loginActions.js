import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE, SET_CURRENT_USER } from "./actionTypes";

export const setLoginSuccess = message => {
  return {
    type: LOGIN_SUCCESS,
    message
  };
};
export const setLoginFailure = message => {
  return {
    type: LOGIN_FAILURE,
    message
  };
};
export const setCurrentUser = payload => {
  return {
    type: SET_CURRENT_USER,
    payload
  };
};

export const handleLogin = ({ email, password }) => async dispatch => {
  try {
    const response = await axios.post(
      `${process.env.LOCAL_BASE_API}/auth/login`,
      {
        email,
        password
      }
    );
    const { message } = response.data;
    dispatch(setLoginSuccess(message));
  } catch (error) {
    const { message, errors = {} } = error.response.data;
    dispatch(setLoginFailure(errors || message));
  }
};
