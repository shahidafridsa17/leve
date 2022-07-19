import React from "react";
import "./NewCollection.css";
import pr1 from "../../../gul.JPG";

function NewCollection() {
  return (
    <div className="NewCollection-main-cont">
      <div className="NewCollection-header-cont">
        <h1 className="NewCollection-header-tag">New Collection</h1>
      </div>
      <div className="NewCollection-product-cont">
        <div className="NewCollection-product">
          <div className="NewCollection-product-img-cont">
            <img
              className="NewCollection-product-img"
              src={pr1}
              alt="product"
            />
          </div>
          <div className="NewCollection-product-detail-cont">
            <h3 className="NewCollection-product-name">Dareej</h3>
            <p className="NewCollection-product-price">$20</p>
          </div>
        </div>
        <div className="NewCollection-product">
          <div className="NewCollection-product-img-cont">
            <img
              className="NewCollection-product-img"
              src={pr1}
              alt="product"
            />
          </div>
          <div className="NewCollection-product-detail-cont">
            <h3 className="NewCollection-product-name">Dareej</h3>
            <p className="NewCollection-product-price">$20</p>
          </div>
        </div>
        <div className="NewCollection-product">
          <div className="NewCollection-product-img-cont">
            <img
              className="NewCollection-product-img"
              src={pr1}
              alt="product"
            />
          </div>
          <div className="NewCollection-product-detail-cont">
            <h3 className="NewCollection-product-name">Dareej</h3>
            <p className="NewCollection-product-price">$20</p>
          </div>
        </div>
        <div className="NewCollection-product">
          <div className="NewCollection-product-img-cont">
            <img
              className="NewCollection-product-img"
              src={pr1}
              alt="product"
            />
          </div>
          <div className="NewCollection-product-detail-cont">
            <h3 className="NewCollection-product-name">Dareej</h3>
            <p className="NewCollection-product-price">$20</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
