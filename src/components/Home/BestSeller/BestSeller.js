import React, { useEffect, useState } from "react";
import "./BestSeller.css";
import pr1 from "../../../pr1.jpg";
import pr4 from "../../../pr4.jpg";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "../../../Helper Func/userSlice";


function BestSeller() {
  const user = useSelector(selectUser);

  const [data, setData] = useState([])

  useEffect(() => {
    let options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch("https://levefragrance.com/api/v1/web/best-seller/", options)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert("Connection Problem"));
  }, []);
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
        {user ? user.map((d, index) => {


          if (data[0] && data[0].product === d.id) {
            return (
              <Link
                to={"/product/" + d.id}
                key={index}
                className="BestSeller-product-cont">
                {console.log(d)}
                <img className="BestSeller-product-img" src={d.product_size[0].image} alt="" />
                <h4 className="BestSeller-product-name">{d.name}</h4>
              </Link>

            );

          }

          if (data[1] && data[1].product === d.id) {

            return (
              <Link
                to={"/product/" + d.id}
                key={index}
                className="BestSeller-product-cont">
                {console.log(d)}
                <img className="BestSeller-product-img" src={d.product_size[0].image} alt="" />
                <h4 className="BestSeller-product-name">{d.name}</h4>
              </Link>

            );

          }
          if (data[2] && data[2].product === d.id) {
            return (
              <Link
                to={"/product/" + d.id}
                key={index}
                className="BestSeller-product-cont">
                {console.log(d)}
                <img className="BestSeller-product-img" src={d.product_size[0].image} alt="" />
                <h4 className="BestSeller-product-name">{d.name}</h4>
              </Link>

            );

          }

        }) : null}

        {/* <div className="BestSeller-product-cont">
          <img className="BestSeller-product-img" src={pr4} alt="" />
          <h4 className="BestSeller-product-name">Dareej</h4>
        </div>
        <div className="BestSeller-product-cont">
          <img className="BestSeller-product-img" src={pr1} alt="" />
          <h4 className="BestSeller-product-name">Dareej</h4>
        </div> */}
      </div>
    </div>
  );
}

export default BestSeller;
