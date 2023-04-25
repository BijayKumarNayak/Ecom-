import { combineReducers } from "redux";
import reducers from "./reducer";
import CartReducer from "./cartReducer";
import productDetailreducer from "./productDetailReducer";

const rootreducer= combineReducers({
    cart:CartReducer,detail:productDetailreducer,reducers

})
export default rootreducer;