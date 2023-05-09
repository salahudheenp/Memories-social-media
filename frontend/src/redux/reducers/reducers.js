import { combineReducers } from "redux";

import postReducers from './postReducers'
import authReducer from "./authReducer";

export default combineReducers({
    posts: postReducers,
    auth: authReducer
})