import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import "./common.css";
import axios from "axios";

export const ProductListing = () => {
  const products = useSelector((state) => state); //fetch the state from redux
  console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Error", error);
      });
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container ">
      <div className="product">
        <Product />
      </div>
    </div>
  );
};
