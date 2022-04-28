import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

export const ProductListing = () => {
  const products = useSelector((state) => state); //fetch the state from redux
  //console.log(products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Error", error);
      });
    console.log(response.data);
    dispatch(setProducts(response.data)); // add action type to return the object
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products:", products);
  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};
