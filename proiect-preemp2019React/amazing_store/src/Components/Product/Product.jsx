import React from "react";
import "./Product.css";

const Product = props => {
  return (
    <div className="prodList">
      {props.products.map(product => (
        <li key={product.id} className="prod">
          <img src={product.imgUrl} className="prodImg" />
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </li>
      ))}
    </div>
  );
};

export default Product;
