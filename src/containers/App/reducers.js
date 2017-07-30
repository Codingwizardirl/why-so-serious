import { combineReducers } from 'redux';

import inputReducer from '../Layout/reducer';

const rootReducer = combineReducers({
  input: inputReducer,
});

export default rootReducer
;
