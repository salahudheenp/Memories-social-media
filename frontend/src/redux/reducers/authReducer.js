import * as actionType from '../actions/types'

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case actionType.AUTH:
            localStorage.setItem('profile', JSON.stringify(Object.assign({}, action.data)));

            return Object.assign({}, state, { authData: action.data, loading: false, errors: null });
        case actionType.LOGOUT:
            localStorage.clear();

            return Object.assign({}, state, { ...state, authData: null, loading: false, errors: null });
        default:
            return state;
    }
};

export default authReducer;
