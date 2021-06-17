import {
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  LOGOUT,
} from "../actions/types";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: null,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        isAuthenticated: false,
        access: null,
        refresh: null,
        user: null,
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
export default auth;