import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { PRODUCTS_API_CALL_REQUEST, PRODUCTS_API_CALL_SUCCESS, PRODUCTS_API_CALL_FAILURE } from "../actions/action-types";

const initialState = {
    products: [],
    fetching: false
};
const productsReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case PRODUCTS_API_CALL_REQUEST:{
            return { ...state, fetching: true, error: null };
            break;
        }


        case PRODUCTS_API_CALL_SUCCESS:{
            return Object.assign({}, state, {fetching: false,  products: action.payload.data});
            break;
        }

        case PRODUCTS_API_CALL_FAILURE:
            return { ...state, fetching: false, products: null, error: action.error };
            break;
        default:
            return state;
    }
};
const rootReducer = combineReducers({
    routing: routerReducer,
    productsReducer
});

export default rootReducer;