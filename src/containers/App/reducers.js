import { combineReducers } from 'redux'

import inputReducer from '../Input/reducer'

const rootReducer = combineReducers({
    input: inputReducer,
})

export default rootReducer