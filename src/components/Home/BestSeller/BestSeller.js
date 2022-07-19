import React from "react";
import "./BestSeller.css";
import pr1 from "../../../pr1.jpg";

function BestSeller() {
  return (
    <div className="BestSeller-main-cont">
      <div className="BestSeller-header-cont">
        <h1 className="BestSeller-header-tag">Best Seller</h1>
        <p className="BestSeller-para-tag">
          Browse our best selling
          <br /> perfumes
        </p>
      </div>
      <div className="BestSeller-product-main-cont">
        <div className="BestSeller-product-cont">
          <img className="BestSeller-product-img" src={pr1} alt="" />
          <h4 className="BestSeller-product-name">Dareej</h4>
        </div>
        <div className="BestSeller-product-cont">
          <img className="BestSeller-product-img" src={pr1} alt="" />
        </div>
        <div className="BestSeller-product-cont">
          <img className="BestSeller-product-img" src={pr1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
