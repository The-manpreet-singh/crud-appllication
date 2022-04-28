import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import "./common.css";

export const ProductListing = () => {
  const products = useSelector((state) => state); //fetch the state from redux
  console.log(products);
  return (
    <div className="ui grid container ">
      <div className="product">
        <Product />
      </div>
    </div>
  );
};
