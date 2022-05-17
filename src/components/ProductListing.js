import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import axios from "axios";
import { setProducts, fetchProducts } from "../redux/actions/productActions";

export const ProductListing = () => {
  const products = useSelector((state) => state); //fetch the state from redux
  //console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("Products:", products);
  return (
    <>
      <Product />
    </>
  );
};
