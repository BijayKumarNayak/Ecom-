import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_DETAIL, SELECTED_PRODUCT } from ".././src/redux/constant";

function* detail({ id }) {
  // console.log("id in psaga", id);
  try {
    let data = yield fetch(`https://fakestoreapi.com/products/${id}`);
    data = yield data.json();
    // console.log(data);

    yield put({ type: PRODUCT_DETAIL, data });
  } catch {}
}
function* fetchDetail() {
  //    console.log("saga",id)
  yield takeEvery(SELECTED_PRODUCT, detail);
}
export default fetchDetail;