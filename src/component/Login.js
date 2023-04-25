import React from "react";
import { useState } from "react";

import { useHistory } from "react-router-dom";

import "./login.css";

function Login() {
  const history = useHistory();

  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = () => {
    console.warn("form submitted");

    history.push("/mainpage", true);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <img
          src="https://img.freepik.com/free-vector/flat-geometric-background_23-2148967370.jpg?w=2000"
          alt=""
        />
        <input
          className="input_box"
          type="email"
          onChange={(e) => setuserName(e.target.value)}
          value={userName}
          placeholder="Enter Email"
          required
        />
        <input
          className="password_box"
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
          required
        />
        <button
          className="submit_btn"
          type="submit"
          onClick={() => handlesubmit()}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Login;