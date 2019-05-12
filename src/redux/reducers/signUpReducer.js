import { initialState } from "../initialState";
import {
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  SET_INPUT
} from "../actions/actionTypes";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP_SUCCESS:
      return { ...state, message: payload };
    case SIGN_UP_FAIL:
      return { ...state, error: payload };
    case SET_INPUT:
      return {
        ...state,
        user: { ...state.user, [payload.field]: payload.value }
      };
    default:
      return state;
  }
};
