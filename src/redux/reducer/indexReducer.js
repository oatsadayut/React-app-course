import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import cartReducer from './cartReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    profileReducer,
    cartReducer,
    authReducer,
})

export default rootReducer