import BlogPostReducer from './BlogPostReducer'
import LoginReducer from './LoginReducer'

import {combineReducers} from 'redux'
const reducer=combineReducers({
    blogs:BlogPostReducer,
    isLoggedIn:LoginReducer
    
    
})
export default reducer;