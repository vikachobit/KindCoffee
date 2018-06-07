import { PRODUCTS_API_CALL_REQUEST, PRODUCTS_API_CALL_SUCCESS, PRODUCTS_API_CALL_FAILURE } from "./action-types";
import { PRODUCT_DETAILS_API_CALL_REQUEST, PRODUCT_DETAILS_API_CALL_SUCCESS, PRODUCT_DETAILS_API_CALL_FAILURE } from "./action-types";

export const fetchAllProducts = () => ({ type: PRODUCTS_API_CALL_REQUEST });
export const fetchAllProductsSuccess = (products) => ({ type: PRODUCTS_API_CALL_SUCCESS, payload: products });
export const fetchAllProductsError = (error) => ({ type: PRODUCTS_API_CALL_FAILURE, payload: error });

export const fetchProductDetails = (productId) => ({ type: PRODUCT_DETAILS_API_CALL_REQUEST, payload: productId });
export const fetchProductDetailsSuccess = (product) => ({ type: PRODUCT_DETAILS_API_CALL_SUCCESS, payload: product });
export const fetchProductDetailsError = (error) => ({ type: PRODUCT_DETAILS_API_CALL_FAILURE, payload: error });