import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        // state are immuatable, we need to make a copy and reassign it
        // ...copy whatever in the state
        ...state,
        loading: true,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case GET_REPOS:
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    default:
      return state;
  }
};
