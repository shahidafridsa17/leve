import React, { useEffect, useState } from "react";
import "./NewCollection.css";
import pr1 from "../../../gul.JPG";
import pr2 from "../../../pr2.jpg";
import pr3 from "../../../pr3.jpg";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "../../../Helper Func/userSlice";

function NewCollection() {
  const user = useSelector(selectUser);

  const [data, setData] = useState([])
  console.log(data);
  useEffect(() => {
    let options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch("https://levefragrance.com/api/v1/web/new-collection/", options)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert("Connection Problem"));
  }, []);
  return (
    <div className="NewCollection-main-cont">
      <div className="NewCollection-header-cont">
        <h1 className="NewCollection-header-tag">New Collection</h1>
      </div>
      <div className="NewCollection-product-cont">
        {user ?
          data ? user.map((d, index) => {
            if (data[0] && data[0].product === d.id) {
              return (
                <Link
                  to={"/product/" + d.id}
                  key={index} className="NewCollection-product">
                  <div className="NewCollection-product-img-cont">
                    <img
                      className="NewCollection-product-img"
                      src={d.product_size[0].image}
                      alt="product"
                    />
                  </div>
                  <div className="NewCollection-product-detail-cont">
                    <h3 className="NewCollection-product-name">{d.name}</h3>
                    <p className="NewCollection-product-price"> ₹{d.product_size[0].price}</p>
                  </div>
                </Link>
              );

            }
            if (data[1] && data[1].product === d.id) {
              return (
                <Link
                  to={"/product/" + d.id}
                  key={index} className="NewCollection-product">
                  <div className="NewCollection-product-img-cont">
                    <img
                      className="NewCollection-product-img"
                      src={d.product_size[0].image}
                      alt="product"
                    />
                  </div>
                  <div className="NewCollection-product-detail-cont">
                    <h3 className="NewCollection-product-name">{d.name}</h3>
                    <p className="NewCollection-product-price"> ₹{d.product_size[0].price}</p>
                  </div>
                </Link>
              );

            }

            if (data[2] && data[2].product === d.id) {
              return (
                <Link
                  to={"/product/" + d.id}
                  key={index} className="NewCollection-product">
                  <div className="NewCollection-product-img-cont">
                    <img
                      className="NewCollection-product-img"
                      src={d.product_size[0].image}
                      alt="product"
                    />
                  </div>
                  <div className="NewCollection-product-detail-cont">
                    <h3 className="NewCollection-product-name">{d.name}</h3>
                    <p className="NewCollection-product-price"> ₹{d.product_size[0].price}</p>
                  </div>
                </Link>
              );

            }

            if (data[3] && data[3].product === d.id) {
              return (
                <Link
                  to={"/product/" + d.id}
                  key={index} className="NewCollection-product">
                  <div className="NewCollection-product-img-cont">
                    <img
                      className="NewCollection-product-img"
                      src={d.product_size[0].image}
                      alt="product"
                    />
                  </div>
                  <div className="NewCollection-product-detail-cont">
                    <h3 className="NewCollection-product-name">{d.name}</h3>
                    <p className="NewCollection-product-price"> ₹{d.product_size[0].price}</p>
                  </div>
                </Link>
              );

            }


          }) : ""
          : ""}

        {/* <div className="NewCollection-product">
          <div className="NewCollection-product-img-cont">
            <img
              className="NewCollection-product-img"
              src={pr3}
              alt="product"
            />
          </div>
          <div className="NewCollection-product-detail-cont">
            <h3 className="NewCollection-product-name">SHAAZI</h3>
            <p className="NewCollection-product-price">$20</p>
          </div>
        </div> */}
        {/* <div className="NewCollection-product">
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
        </div> */}
        {/* <div className="NewCollection-product">
          <div className="NewCollection-product-img-cont">
            <img
              className="NewCollection-product-img"
              src={pr2}
              alt="product"
            />
          </div>
          <div className="NewCollection-product-detail-cont">
            <h3 className="NewCollection-product-name">Dareej</h3>
            <p className="NewCollection-product-price">$20</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default NewCollection;
