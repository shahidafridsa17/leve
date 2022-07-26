import React, { useEffect, useState } from "react";
import "./OurStore.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "../../../Helper Func/userSlice";

// const data = [
//   {
//     name: "Beleza",
//     category: "Bukhoor",
//     price: 25,
//     url: "http://cdn.shopify.com/s/files/1/0616/7494/6800/products/hydra-100ml-01-656.jpg?v=1644998647",
//   },
//   {
//     name: "Closer",
//     price: 15,
//     category: "Khuld",

//     url: "https://static.toiimg.com/thumb/msid-63080082,imgsize-293543,width-800,height-600,resizemode-75/63080082.jpg",
//   },
//   {
//     name: "Beleza",
//     price: 25,
//     category: "Bukhoor",

//     url: "http://cdn.shopify.com/s/files/1/0616/7494/6800/products/hydra-100ml-01-656.jpg?v=1644998647",
//   },
//   {
//     name: "Closer",
//     price: 15,
//     category: "Bukhoor",

//     url: "https://static.toiimg.com/thumb/msid-63080082,imgsize-293543,width-800,height-600,resizemode-75/63080082.jpg",
//   },
//   {
//     name: "Beleza",
//     price: 25,
//     category: "Bukhoor",

//     url: "http://cdn.shopify.com/s/files/1/0616/7494/6800/products/hydra-100ml-01-656.jpg?v=1644998647",
//   },
//   {
//     name: "Closer",
//     price: 15,
//     category: "Khuld",

//     url: "https://static.toiimg.com/thumb/msid-63080082,imgsize-293543,width-800,height-600,resizemode-75/63080082.jpg",
//   },
//   {
//     name: "Beleza",
//     price: 25,
//     category: "kjijjnjnjn",

//     url: "http://cdn.shopify.com/s/files/1/0616/7494/6800/products/hydra-100ml-01-656.jpg?v=1644998647",
//   },
//   {
//     name: "Closer",
//     price: 15,
//     category: "Khuld",

//     url: "https://static.toiimg.com/thumb/msid-63080082,imgsize-293543,width-800,height-600,resizemode-75/63080082.jpg",
//   },
//   {
//     name: "Beleza",
//     price: 25,
//     category: "French Perfume",

//     url: "http://cdn.shopify.com/s/files/1/0616/7494/6800/products/hydra-100ml-01-656.jpg?v=1644998647",
//   },
//   {
//     name: "Closer",
//     price: 15,
//     category: "French Perfume",

//     url: "https://static.toiimg.com/thumb/msid-63080082,imgsize-293543,width-800,height-600,resizemode-75/63080082.jpg",
//   },
//   {
//     name: "Closer",
//     price: 15,
//     category: "French Perfume",

//     url: "https://static.toiimg.com/thumb/msid-63080082,imgsize-293543,width-800,height-600,resizemode-75/63080082.jpg",
//   },
//   {
//     name: "Closer",
//     price: 15,
//     category: "French Perfume",

//     url: "https://static.toiimg.com/thumb/msid-63080082,imgsize-293543,width-800,height-600,resizemode-75/63080082.jpg",
//   },
// ];
function OurStore() {
  const [productCategory, setProductCategory] = useState("All");
  const [category, setCategory] = useState([]);
  const user = useSelector(selectUser);
  useEffect(() => {
    let categoryList = new Set();
    if (user) {
      user.forEach((e) => {
        categoryList.add(e.category);
      });
    }
    const array = [...categoryList];
    setCategory(array);
  }, [user]);
  if (user) {
    return (
      <div className="OurStore-main-container">
        <div className="OurStore-header-cont">
          <h1 className="OurStore-header-tag">Our Store</h1>
        </div>
        <div className="OurStore-body-cont">
          <div className="OurStore-product-category-cont">
            <span
              onClick={() => setProductCategory("All")}
              className={
                productCategory === "All"
                  ? "OurStore-product-category category-active"
                  : "OurStore-product-category"
              }
            >
              All
            </span>
            {category
              ? category.map((e, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => setProductCategory(e)}
                    className={
                      productCategory === e
                        ? "OurStore-product-category category-active"
                        : "OurStore-product-category"
                    }
                  >
                    {e}
                  </span>
                );
              })
              : null}
          </div>
          <div className="OurStore-product-display-cont">
            {productCategory === "All"
              ? user.map((e) => {
                return (
                  <Link

                    key={e.id}
                    className="OurStore-product-display"
                    to={"/product/" + e.id}
                  >
                    <img
                      className="OurStore-product-display-img"
                      src={e.product_size[0].image}
                      alt="product-img"
                    />
                    <h3 className="OurStore-product-display-name">
                      {e.name}
                    </h3>
                    <p className="OurStore-product-display-price">
                      ₹{e.product_size[0].price}
                    </p>
                  </Link>
                );
              })
              : user.map((e) => {
                if (productCategory === e.category) {
                  return (
                    <Link
                      key={e.id}
                      className="OurStore-product-display"
                      to={"/product/" + e.id}
                    >
                      <img
                        className="OurStore-product-display-img"
                        src={e.product_size[0].image}
                        alt="product-img"
                      />
                      <h3 className="OurStore-product-display-name">
                        {e.name}
                      </h3>
                      <p className="OurStore-product-display-price">
                        ₹{e.product_size[0].price}
                      </p>
                    </Link>
                  );
                } else {
                  return null;
                }
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default OurStore;
