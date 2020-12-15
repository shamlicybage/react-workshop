import {createStore} from 'redux'
// import reducer from '../src/Reducers/RootReducer'
import {combineReducers} from 'redux'
import BlogPostReducer from './Reducers/BlogPostReducer'
import LoginReducer from './Reducers/LoginReducer'


const reducer=combineReducers({
    blogs:BlogPostReducer,
    isLoggedIn:LoginReducer
    
})
const store=createStore(reducer);
export default store;