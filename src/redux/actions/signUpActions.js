import axios from "../../utils/axios";
import { SIGN_UP_SUCCESS, SIGN_UP_FAIL } from "./actionTypes";
// const { LOCAL_BASE_API } = process.env;

export const handleSignUp = ({
  email,
  password,
  firstName,
  lastName
}) => async dispatch => {
  try {
    await axios.post(`http://localhost:5070/api/v1/users`, {
      email,
      password,
      firstName,
      lastName
    });

    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: "Account created successfully"
    });
  } catch (error) {
    console.log(error.response.data);
    const {
      errors: { message }
    } = error.response.data;
    dispatch({
      type: SIGN_UP_FAIL,
      payload: message
    });
  }
};
