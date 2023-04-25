import { PRODUCT_DETAIL } from ".././redux/constant";

const initialState={};

const productDetailreducer=(state=initialState,action)=>{
    switch(action.type){
        case PRODUCT_DETAIL:
            return {...action.data}

        default:
            return state
    }

}
export default productDetailreducer;