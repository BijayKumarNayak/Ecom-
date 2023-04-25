import React from "react";
import "./header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "@mui/material/Button";

const Headercomponent = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const counter = useSelector((state) => state.cart);
  // console.warn(counter.length)
  return (
    <div className="header_main">
      <div className="name">
        <h3>MyKart</h3>
      </div>
      <ul>
        <li>
          <div className="login">
            {isAuthenticated ? (
              <Button
                variant="outlined"
                sx={{ mx: 2 }}
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                LogOut
              </Button>
            ) : (
              <Button
                variant="outlined"
                sx={{ mx: 2 }}
                onClick={() => loginWithRedirect()}
              >
                LogIn
              </Button>
            )}
          </div>
        </li>
        <li><Link to="/cart">
        <div className="cart">
          <img
            className="cart_image"
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />

          <span className="badge">{counter.length}</span>
        </div>
      </Link></li>
      </ul>

      
    </div>
  );
};

export default Headercomponent;
