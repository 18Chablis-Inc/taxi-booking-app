import React from "react";
import Navbar from "./components/Navbar";

const Base = ({ children }) => (
  <div className="dashboard">
    <Navbar />
    <div className="content">{children}</div>
  </div>
);

export default Base;
