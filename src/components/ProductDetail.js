import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch= useDispatch();
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error", err);
      });

      dispatch();
  };

  return <div>ProductDetail</div>;
};
