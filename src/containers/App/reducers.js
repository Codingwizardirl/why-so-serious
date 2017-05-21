import { combineReducers } from 'redux'

import emotionsReducer from '../Emotions/reducer'

const rootReducer = combineReducers({
    emotions: emotionsReducer,
})

export default rootReducer