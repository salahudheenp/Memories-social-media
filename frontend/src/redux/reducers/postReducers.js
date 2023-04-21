
import { FETCH_ALL, FETCH_ERROR, CREATE, CREATE_ERROR, UPDATE_ERROR, UPDATE_POST, DELETE_POST, LIKE_POST } from '../actions/types'


// const initialState = {
//     posts: [],
//     loading: true
// }
export default (state = [], action) => {
    switch (action.type) {

        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...state, action.payload]
        case UPDATE_POST:
            return state.map((state) => state._id === action.payload._id ? action.payload : state)
        case DELETE_POST:
            return state.filter((post) => post._id !== action.payload)
        case LIKE_POST:
            return state.map((state) => state._id === action.payload._id ? action.payload : state)


        default:
            return state;
    }
}