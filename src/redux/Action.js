import { GET_PRODUCTS, SELECTED_PRODUCT } from "./constant";
import { ADD_TO_CART } from "./constant";
import { ADD_QUANTITY,SUB_QUANTITY,SEARCH_PRODUCT } from "./constant";

export const getproducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
export const addtocart = (data) => {
  
  return {
    type: ADD_TO_CART,
    data,
  };
};
export const removefromcart = (id) => {
  // console.log("remove from cart action is calling")
  return {
    type: "REMOVE_FROM_CART",
    id
  };
};
export const selectedproduct = (id) => {
  // console.warn("in action",id)
  return {
    type: SELECTED_PRODUCT,
    id
   
    
  };
};
export const addQuantity=(id)=>{
  return{
    type: ADD_QUANTITY,
    id
  };
};
export const subQuantity=(data)=>{
  return{
    type: SUB_QUANTITY,
    data
  };
};
export const searchProduct=(query)=>{
  return{
    type: SEARCH_PRODUCT,
    query
  };
};