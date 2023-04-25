import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectedproduct } from "../redux/Action";
import { useParams } from "react-router-dom";
import "./productDetail.css";
// import Rating from '@mui/material/Rating';
import MasterLayout from "./masterlayout";
import { addtocart } from "../redux/Action";
// import { useState } from "react";

function ProductDetail() {
  
  // const [value, setValue] = useState();
  const product = useSelector((state) => state.detail);
//   const rating = useSelector((state) => state.detail.rating);
  // console.log(rating);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedproduct(id));
  }, [id]);

  return (
    <>
    <MasterLayout>
    
    <div className="detail-container">
    
      <div className="container-left">
        <div className="product-img">
          {" "}
          <img src={product.image} alt="" />
        </div>
        
      </div>
      <div className="container-right">
        <div className="title">{product.title}</div>
      

        <div className="price"> ${product.price}</div>
        <div className="description">{product.description}</div>
        <div className="order">
          <button type="button" className="btn btn-warning"  onClick={() => dispatch(addtocart(product))}>
            Add to cart
          </button>
          <button type="button" className="btn btn-primary">
            Buynow
          </button>
        </div>
      </div>
     
    </div>
    </MasterLayout>
    </>
  );
}

export default ProductDetail;