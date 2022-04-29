import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productActions";

export const ProductDetail = () => {
  const product = useSelector((state) => state.product); //its give the state access
  const { productId } = useParams();
  const dispatch = useDispatch();
  //console.log(productId);
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error", err);
      });

    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
  }, [productId]);
  return <div>ProductDetail</div>;
};
