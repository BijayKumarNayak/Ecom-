import {all} from "redux-saga/effects";
import productsaga from "./productsaga";
import fetchDetail from "./productDetailSaga";

export default function* rootSaga() {
    yield all([productsaga(),fetchDetail()]);
   }