import { takeLatest, call, put } from "redux-saga/effects";
import { fetchAllProductsSuccess } from "../actions/index";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest("PRODUCTS_API_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchProducts() {
    return axios({
        method: "get",
        url: "http://159.89.106.160/products"
    });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchProducts);

        const products = response.data;
        console.log(products);
        // dispatch a success action to the store with the new dog
        yield put(fetchAllProductsSuccess(products));

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "PRODUCTS_API_CALL_FAILURE", error });
    }
}