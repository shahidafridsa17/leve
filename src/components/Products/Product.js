import React from "react";
import { useParams } from "react-router-dom";
function Product() {
  let { id } = useParams();
  return <div>Product {id}</div>;
}

export default Product;
