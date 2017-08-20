import { REQUEST_EMOTIONS, RECEIVE_EMOTIONS, REQUEST_EMOTIONS_FAILED,
        REQUEST_PLAYLISTS, RECEIVE_PLAYLISTS, REQUEST_PLAYLISTS_FAILED } from '../actions/input';

const initialState = {
  fetching: false,
  error: false,
  emotions: null,
  playlists: null,
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
    case REQUEST_PLAYLISTS:
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case RECEIVE_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload,
        fetching: false,
      };
    case REQUEST_PLAYLISTS_FAILED:
      return {
        ...state,
        error: true,
        fetching: false,
      };
    default:
      return state;
  }
}
