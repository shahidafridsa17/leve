import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";
import "./Products.css";

import { useSelector } from "react-redux";
import { selectUser } from "../../Helper Func/userSlice";

// let data = {
//   name: "Closer",
//   category: "Khuld",
//   description: "Allow our aroma to enchant your senses",
//   product_size: [
//     {
//       price: 15,
//       size: 30,
//       size_type: "ml",
//       image:
//         "https://static.toiimg.com/thumb/msid-63080082,imgsize-293543,width-800,height-600,resizemode-75/63080082.jpg",
//     },
//     {
//       price: 25,
//       size: 50,
//       size_type: "ml",
//       image:
//         "http://cdn.shopify.com/s/files/1/0616/7494/6800/products/hydra-100ml-01-656.jpg?v=1644998647",
//     },
//   ],
// };

function Product() {
  const user = useSelector(selectUser);

  let { id } = useParams();
  const [data, setData] = useState();
  const [perfumeSize, setPerfumeSize] = useState(0);

  useEffect(() => {
    if (user) {
      user.forEach((e) => {
        if (e.id === id) {
          setData(e);
        }
      });
    }
  }, [user]);
  const sizeChange = (index) => {
    setPerfumeSize(index);
  };
  const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };
  const buyButton = () => {
    let number = 918590302028;
    let message = `Hi Leve Fragrance, I would like to buy ${data.name} perfume of ${data.product_size[perfumeSize].size} ${data.product_size[perfumeSize].size_type}.`;
    let url;
    const device = deviceType();
    if (device === "desktop") {
      url = `https://web.whatsapp.com/send?phone=${number}`;

      url += `&text=${encodeURI(message)}&app_absent=0`;
    } else {
      url = `whatsapp://send?phone=${number}`;
      url += `&text=${encodeURI(message)}&app_absent=0`;
    }
    window.open(url);
  };
  if (data) {
    return (
      <div className="single-product-main-cont">
        <Header navlinks={false} />
        <div className="single-product-cont">
          <div className="single-product-img-details-main-cont">
            <div className="single-product-img-main-cont">
              <div className="single-product-img-cont">
                <img
                  className="single-product-img-tag"
                  src={data.product_size[perfumeSize].image}
                  alt="product-img"
                />
              </div>
            </div>
            <div className="single-product-details-main-cont">
              <h1 className="single-product-details-header-tag">{data.name}</h1>
              <p className="single-product-details-tag">{data.description}</p>
              <h3 className="single-product-details-bottle-size-tag">
                Bottle Size :
              </h3>
              <div className="single-product-details-bottle-size-div">
                {data.product_size.map((e, index) => (
                  <div
                    key={index}
                    onClick={() => sizeChange(index)}
                    className="single-product-details-bottle-size-single-size"
                  >
                    <div
                      style={
                        perfumeSize === index
                          ? { backgroundColor: "#E2AC80", border: "none" }
                          : { backgroundColor: "transparent" }
                      }
                      className="single-product-details-bottle-size-round"
                    ></div>
                    <span className="single-product-details-bottle-size-type">
                      {e.size}
                    </span>
                    <span
                      style={{ marginLeft: "5px" }}
                      className="single-product-details-bottle-size-type"
                    >
                      {e.size_type}
                    </span>
                  </div>
                ))}
              </div>
              <h1 className="single-product-details-bottle-price-mrp-tag">
                MRP :{" "}
                <span style={{ color: "black", fontWeight: "500" }}>
                  ₹{data.product_size[perfumeSize].price}
                </span>
              </h1>
              <div
                onClick={() => buyButton()}
                className="single-product-buy-button"
              >
                Buy Now
              </div>
            </div>
          </div>
          {/* <div className="single-product-description-main-cont">
          <h3></h3>
        </div> */}
          {/* <div className="single-product-footer"></div> */}
          <Footer visible={false} />
        </div>
      </div>
    );
  }
}

export default Product;
