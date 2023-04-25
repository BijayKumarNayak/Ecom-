// import axios from "axios"

import { put, takeEvery } from "redux-saga/effects";

import { GET_PRODUCTS, SET_PRODUCTS } from ".././src/redux/constant";

function* GetproductList() {
  let data = yield fetch("https://fakestoreapi.com/products");

  data = yield data.json();

   console.warn(data);

   yield put({ type: SET_PRODUCTS,data });
}

function* productsaga() {
  yield takeEvery(GET_PRODUCTS, GetproductList);
}

export default productsaga;
