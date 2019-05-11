import { initialState } from "../initialState";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SET_INPUT,
} from "../actions/actionTypes";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, token: payload };
    case LOGIN_FAILURE:
      return { ...state, error: payload };
    case SET_INPUT:
      return { ...state, [payload.field]: payload.value };
    default:
      return state;
  }
};
