import { REQUEST_EMOTIONS, RECEIVE_EMOTIONS, REQUEST_EMOTIONS_FAILED,
        REQUEST_PLAYLIST, RECEIVE_PLAYLIST, REQUEST_PLAYLIST_FAILED } from '../actions/input';

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
    case REQUEST_PLAYLIST:
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case RECEIVE_PLAYLIST:
      return {
        ...state,
        playlist: action.payload,
        fetching: false,
      };
    case REQUEST_PLAYLIST_FAILED:
      return {
        ...state,
        error: true,
        fetching: false,
      };
    default:
      return state;
  }
}
