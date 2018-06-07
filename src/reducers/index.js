import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { PRODUCTS_API_CALL_REQUEST, PRODUCTS_API_CALL_SUCCESS, PRODUCTS_API_CALL_FAILURE } from "../actions/action-types";
import { PRODUCT_DETAILS_API_CALL_REQUEST, PRODUCT_DETAILS_API_CALL_SUCCESS, PRODUCT_DETAILS_API_CALL_FAILURE } from "../actions/action-types";

const initialState = {
    products: [],
    filteredItems: [],
    direction: {
        name: '', max: '', min: '', avg: ''
    },
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
        case PRODUCT_DETAILS_API_CALL_SUCCESS:{
            let details = action.payload.data;
            let product = action.payload.product;


            let value = details.map((el) => {
                let allPrices = el.pricingDataByWeek.map(elem => elem.price);
                // console.log(allPrices);
                return {
                    id: el.banner.id,
                    name: el.banner.name,
                    max: Math.max(...allPrices).toFixed(2),
                    min: Math.min(...allPrices).toFixed(2),
                    avg: (allPrices.reduce((a, b) => parseFloat(a) + parseFloat(b)) / allPrices.length).toFixed(2)

                };

            });

            let maxItems = value.map(item => {
                return item.max
            });

            let minItems = value.map(item => {
                return item.min
            });

            let avgItems = value.map(item => {
                return item.avg
            });

            let avgItem = (avgItems.reduce((a, b) => parseFloat(a) + parseFloat(b)) / avgItems.length).toFixed(2);

            const filteredItems = value;

            return{
                ...state,
                value: value,
                maxItems: maxItems,
                minItems: minItems,
                avgItem: avgItem,
                selected: product,
                filteredItems: filteredItems,
                details: details,
            };
            break;
        }
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