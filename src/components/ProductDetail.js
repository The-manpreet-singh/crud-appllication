import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProducts,
  fetchProduct,
} from "../redux/actions/productActions";
import fakeStoreApi from "../apis/fakeStoreApi";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

export const ProductDetail = () => {
  const product = useSelector((state) => state.product); //its give the state access
  const { image, title, rating, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  //console.log(productId);
  console.log(product);

  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchProduct(productId));
    }
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  const ShowProducts = () => {
    return (
      <>
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <>
            <div className="col-md-6">
              <img height="400px" width="400px" src={image} alt={title} />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">{category}</h4>
              <h1 className="display-5">{title}</h1>
              <p className="lead fw-bolder">
                Rating {rating && rating.rate}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-bold my-4">$ {price}</h3>
              <p className="lead">{description}</p>
              <button className="btn btn-outline-dark px-4 py-2">
                Add to Cart
              </button>
              <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                Go to Cart
              </NavLink>
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          <ShowProducts />
        </div>
      </div>
    </div>
  );
};
