import React from "react";
import Benefit from "../components/Benefits";
import CabRoute from "../components/CabRoute";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Rate from "../components/Rate";
import SearchCab from "../components/SearchCab";
import WhyCabBooking from "../components/WhyCabBooking";

const Cabs = () => {
  return (
    <div>
      <Benefit />
      <CabRoute />
      <WhyCabBooking />
      <SearchCab />
      <Rate />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Cabs;
