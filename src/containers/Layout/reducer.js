import { REQUEST_EMOTIONS, RECEIVE_EMOTIONS, REQUEST_EMOTIONS_FAILED } from './actions';

const initialState = {
  fetching: false,
  error: false,
  emotions: null,
};

export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_EMOTIONS:
      return {
        ...state,
        fetching: true,
        error: false,
        emotions: null,
      };
    case RECEIVE_EMOTIONS:
      return {
        ...state,
        emotions: action.payload,
        fetching: false,
      };
    case REQUEST_EMOTIONS_FAILED:
      return {
        ...state,
        error: true,
        fetching: false,
      };
    default:
      return state;
  }
}
