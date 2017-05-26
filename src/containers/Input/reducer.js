import { REQUEST_EMOTIONS, RECEIVE_EMOTIONS } from './actions';

const initialState = {
  fetching: false,
  emotions: null,
};

export default function inputReducer (state = initialState, action) {
  switch(action.type) {
    case REQUEST_EMOTIONS: 
      return {
        ...state,
        fetching: true
      }
    case RECEIVE_EMOTIONS:
      return {
        ...state,
        emotions: action.payload,
      }
    default:
      return state;
  }
}
