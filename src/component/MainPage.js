import React from "react";
import { addtocart } from "../redux/Action";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import MasterLayout from "./masterlayout";
import "./mainpage.css";
import { useEffect } from "react";
import { getproducts } from "../redux/Action";
import { Link } from "react-router-dom";

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch]);

  const products = useSelector((state) => state.reducers.data);
  // const cartData=useSelector((state)=>state.cart);
  // console.warn("cart data available",cartData)

  // console.log("callingdfjs", products);

  const renderlist = products.map((product) => {
    return (
      <div className="product_container" key={product.id} >
      <Link to={"/detail/"+product.id}>
      <div className="image">
        <img className="product_image" src={product.image} alt="" />
        </div>
        </Link>
        <span className="product_title">{product.title}</span>

        <span className="product_price">${product.price}</span>
        <div className="add_remove">
          <button
            type="button"
            className="btn btn-warning"
             onClick={() => dispatch(addtocart(product))}
          >
            Add to cart
          </button>
          <button
            type="button"
            className="btn btn-primary"
           
          >
            Buy now
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <MasterLayout>
        <div className="product_wrapper"> {renderlist}</div>
      </MasterLayout>
    </div>
  );
}

export default MainPage;
