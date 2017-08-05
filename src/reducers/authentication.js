import { SET_TOKEN, RESET_TOKEN } from '../actions/authentication';

const initialState = {
  token: null,
  authenticated: false,
};

export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        authenticated: true,
      };
    case RESET_TOKEN:
      return {
        ...state,
        token: null,
        authenticated: false,
      };
    default:
      return state;
  }
}
