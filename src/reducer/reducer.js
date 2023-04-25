import { SET_PRODUCTS } from ".././redux/constant";
const initialState = {  
  data: [],  
 
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
   
      
    case SET_PRODUCTS:
       console.log("get product reducer is call ing ")
      return{ ...state,  
        data: action.data,
      loading:false
      }

    default:
      return state;
  }
};

export default reducers;