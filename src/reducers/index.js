import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { PRODUCTS_API_CALL_REQUEST, PRODUCTS_API_CALL_SUCCESS, PRODUCTS_API_CALL_FAILURE } from "../actions/action-types";
import { PRODUCT_DETAILS_API_CALL_REQUEST, PRODUCT_DETAILS_API_CALL_SUCCESS, PRODUCT_DETAILS_API_CALL_FAILURE } from "../actions/action-types";

const initialState = {
    products: []
};
const productsReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case PRODUCTS_API_CALL_REQUEST:
            return { ...state, error: null };
            break;
        case PRODUCTS_API_CALL_SUCCESS:
            return {...state, products: action.payload.data};
            break;

        case PRODUCTS_API_CALL_FAILURE:
            return { ...state, products: null, error: action.error };
            break;
        case PRODUCT_DETAILS_API_CALL_REQUEST:
            return {...state, error: null };
            break;
        case PRODUCT_DETAILS_API_CALL_SUCCESS:
            return { ...state, selected: action.payload };
            break;
        case PRODUCT_DETAILS_API_CALL_FAILURE:
            return { ...state, selected: null, errorDetails: action.error };
            break;
        default:
            return state;
    }
};
const rootReducer = combineReducers({
    routing: routerReducer,
    products: productsReducer
});

export default rootReducer;