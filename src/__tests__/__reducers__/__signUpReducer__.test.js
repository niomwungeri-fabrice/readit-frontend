import signUpReducer from "../../redux/reducers/signUpReducer";
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SET_INPUT
} from "../../redux/actions/actionTypes";
export const initialState = {
  message: "",
  error: "",
  token: "",
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  },
  post: {
    title: "",
    content: ""
  }
};

const testInput = { field: "email", value: "test@test.com" };
describe("team reducer", () => {
  test("should handle SET_ERROR", () => {
    expect(
      signUpReducer(initialState, {
        type: SIGN_UP_FAIL,
        payload: "Database Error"
      })
    ).toEqual({
      ...initialState,
      error: "Database Error"
    });
  });

  test("should handle SET_SUCCESS", () => {
    expect(
      signUpReducer(initialState, {
        type: SIGN_UP_SUCCESS,
        payload: "success"
      })
    ).toEqual({
      ...initialState,
      message: "success"
    });
  });

  test("should handle SET_INPUT", () => {
    expect(
      signUpReducer(initialState, {
        type: SET_INPUT,
        payload: { ...testInput }
      })
    ).toEqual({
      ...initialState,
      user: { ...initialState.user, [testInput.field]: testInput.value }
    });
  });
});
