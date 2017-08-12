import { combineReducers } from 'redux';

import inputReducer from './reducers/input';
import authenticationReducer from './reducers/authentication';

const rootReducer = combineReducers({
  input: inputReducer,
  authentication: authenticationReducer,
});

export default rootReducer;
