import { ADD_TO_CART, ADD_QUANTITY, REMOVE_FROM_CART } from ".././redux/constant";

const initialState = [];

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemInCart = state.find((item) => item.id === action.data.id);
      if (itemInCart) {
        // console.warn("item already in cart", itemInCart);
        return { ...state };
      } else {
        return [...state, action.data];
      }
    case ADD_QUANTITY:
      return {
        state: state.map(
          (product) =>
            product.id === action.id
              ? { ...product, quantity: product.quantity + 1 }
              : product,
          console.warn("item quantity increase")
        ),
      };

    case REMOVE_FROM_CART:
      // return{...state,
      //    itemToRemove:state.filter((item)=>item.id !== action.id),
      //   if(itemToRemove){
      //     console.log("item to remove",itemToRemove)

      //   }

      // }
      console.log("remove cart calling");

      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};

export default CartReducer;
