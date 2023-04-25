import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from ".././src/component/MainPage";
import productDetail from ".././src/component/ProductDetail";
import NotFound from ".././src/component/NotFound";
import Login from ".././src/component/Login";
import cart from ".././src/component/Cart";

function Approute() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/mainpage" component={MainPage}  />
          <Route path="/detail/:id" component={productDetail} />
          <Route path="/" component={Login} exact  />
          <Route path="/cart" component={cart} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Approute;