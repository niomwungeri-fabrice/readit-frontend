import signInReducer from "../../redux/reducers/signInReducer";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SET_INPUT
} from "../../redux/actions/actionTypes";
const initialState = {
  auth: {
    token: "",
    error: "",
    message: "",
    user: {
      email: "",
      password: ""
    }
  }
};
const testInput = { field: "email", value: "test@test.com" };
describe("team reducer", () => {
  test("should handle SET_ERROR", () => {
    expect(
      signInReducer(initialState, {
        type: LOGIN_FAILURE,
        payload: "Database Error"
      })
    ).toEqual({
      ...initialState,
      error: "Database Error"
    });
  });

  test("should handle SET_SUCCESS", () => {
    expect(
      signInReducer(initialState, {
        type: LOGIN_SUCCESS,
        payload: "success"
      })
    ).toEqual({
      ...initialState,
      token: "success"
    });
  });

  test("should handle SET_INPUT", () => {
    expect(
      signInReducer(initialState, {
        type: SET_INPUT,
        payload: { ...testInput }
      })
    ).toEqual({
      ...initialState,
      user: { ...initialState.user, [testInput.field]: testInput.value }
    });
  });
});
