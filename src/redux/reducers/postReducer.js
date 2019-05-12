import { initialState } from "../initialState";
import {
  POST_FAIL,
  POST_SUCCESS,
  SET_POST,
  SET_INPUT
} from "../actions/actionTypes";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_SUCCESS:
      return { ...state, message: payload };
    case POST_FAIL:
      return { ...state, error: payload };
    case SET_INPUT:
      return {
        ...state,
        post: { ...state.post, [payload.field]: payload.value }
      };
    case SET_POST:
      return {
        ...state,
        post: { ...state.post, payload }
      };
    default:
      return state;
  }
};
