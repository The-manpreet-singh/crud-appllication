import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products); //fetch the state from redux
  const { id, title } = products[0]; //destructuing the state from redux
  return (
    <div className="four wide column">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
