import { combineReducers } from "redux";
import signInReducer from "./signInReducer";
import signUpReducer from "./signUpReducer";
import postReducer from "./postReducer";

export default combineReducers({
  auth: signInReducer,
  sign: signUpReducer,
  posts: postReducer
});
