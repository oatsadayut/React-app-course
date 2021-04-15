import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    profileReducer,
    cartReducer,
})

export default rootReducer