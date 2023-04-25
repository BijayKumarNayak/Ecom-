import React from "react";
import Headercomponent from "./header";
import Footer from "./Footer";

const MasterLayout = (props) => {
  return (
    <div>
      <Headercomponent></Headercomponent>
      <section>{props.children}</section>
      <Footer></Footer>
    </div>
  );
};
export default MasterLayout;
