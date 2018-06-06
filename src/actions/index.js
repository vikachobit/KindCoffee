import { PRODUCTS_API_CALL_REQUEST } from "./action-types";
import { PRODUCTS_API_CALL_SUCCESS } from "./action-types";
import { PRODUCTS_API_CALL_FAILURE } from "./action-types";

export const fetchAllProducts = () => ({ type: PRODUCTS_API_CALL_REQUEST });
export const fetchAllProductsSuccess = (products) => ({ type: PRODUCTS_API_CALL_SUCCESS, payload: products });
export const fetchAllProductsError = (error) => ({ type: PRODUCTS_API_CALL_FAILURE, payload: error });