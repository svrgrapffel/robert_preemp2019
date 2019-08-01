import React from "react";
import "./Product.css";

const Product = props => {
  return (
    <div>
      {props.prodList[0].imgLoc}
      {props.prodList[0].name}
      {props.prodList[0].price}
    </div>
  );
};

export default Product;
