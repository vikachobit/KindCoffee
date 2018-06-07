import { takeLatest, call, put } from "redux-saga/effects";
import {
    fetchAllProductsSuccess,
    fetchAllProductsError,
    fetchProductDetailsError,
    fetchProductDetailsSuccess
} from "../actions/index";
import { PRODUCTS_API_CALL_REQUEST, PRODUCT_DETAILS_API_CALL_REQUEST } from "../actions/action-types";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts getProducts, getProductDetails
export function* watcherSaga() {
    yield takeLatest(PRODUCTS_API_CALL_REQUEST, getProducts);
    yield  takeLatest(PRODUCT_DETAILS_API_CALL_REQUEST, getProductDetails)
}

// function that makes the api request and returns a Promise for response
function loadProducts() {
    return axios({
        method: "get",
        url: "http://159.89.106.160/products"
    });
}

// function that makes the api request and returns a Promise for response
function loadProductDetails(productId) {
    return axios({
        method: "get",
        url: `http://159.89.106.160/products${productId}`
    });
}


//  makes the api call when watcher saga sees the action
function* getProducts() {
    try {
        const response = yield call(loadProducts);

        const products = response.data;
        console.log(products);
        // dispatch a success action to the store with the new dog
        yield put(fetchAllProductsSuccess(products));

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put(fetchAllProductsError(error));
    }
}
function* getProductDetails(action) {
    try {
        const response = yield call(loadProductDetails , action.payload);

        const productDetails = response.data;
        console.log(productDetails);
        // dispatch a success action to the store with the new dog
        yield put(fetchProductDetailsSuccess(productDetails));

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put(fetchProductDetailsError(error));
    }
}