import { initialState } from "../initialState";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SET_INPUT,
  SET_CURRENT_USER
} from "../actions/actionTypes";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, message: payload };
    case LOGIN_FAILURE:
      return { ...state, error: payload };
    case SET_INPUT:
      return { ...state, [payload.field]: payload.value };
    case SET_CURRENT_USER:
      return { ...state, token: payload };
    default:
      return state;
  }
};
