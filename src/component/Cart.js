import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import MasterLayout from "./masterlayout";
import { addQuantity } from "../redux/Action";
import { removefromcart } from "../redux/Action";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // console.log(cartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  // console.warn("TOTAL AMOUNT IS", amount);
  if (cartData.length === 0) {
    return (
      <MasterLayout>
        <div className="cartpage">
          <h1>No item in cart🥺</h1>
        </div>
      </MasterLayout>
    );
  } else
    return (
      <div>
        <MasterLayout>
          <div className="cartpage">
            <div className="cartpage-container-left">
              {cartData.map((data) => {
                return (
                  <div key={data.id}>
                    <div className="productRender">
                      <div className="img-price">
                        <div className="cart-img">
                          <img src={data.image} alt="product" />
                        </div>
                        <div>
                          <span>{data.title}</span>
                          <div className="price">{data.price}</div>

                          <div className="totoal_price"></div>
                        </div>
                      </div>

                      <div className="cartpage-buttom">
                        <div className="inc-dec">
                          <div className="counter">
                            <button type="button" className="btn btn-primary">
                              -
                            </button>
                            <div className="quantity">{}</div>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => dispatch(addQuantity(data.id))}
                            >
                              +
                            </button>
                            <div className="buy-remove">
                              <button type="button" className="btn btn-primary">
                                Buynow
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() =>
                                  dispatch(removefromcart(data.id))
                                }
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cartpage-container-right">
              <div className="cart-page-container-right-content">
                <p>Number Of Item:{cartData.length}</p>
                <p>Total Price:{amount}</p>
              </div>
            </div>
          </div>
        </MasterLayout>
      </div>
    );
};

export default Cart;
