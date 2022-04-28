import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products); //fetch the state from redux
  //const { id, title, } = products[0]; //destructuing the state from redux
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product; //destructuing t
    return (
      <div className="four wide column" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{renderList}</div>;
};
export default Product;
