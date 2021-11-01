import React from "react";
import Navbar from "./components/Navbar";

const Base = ({ children }) => (
  <div>
    {/* <Navbar /> */}
    <main>{children}</main>
  </div>
);

export default Base;
