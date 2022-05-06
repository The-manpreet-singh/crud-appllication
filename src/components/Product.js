import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import fakeStoreApi from "../apis/fakeStoreApi";

const Product = () => {
  //const products = useSelector((state) => state.allProducts.products); //fetch the state from redux
  const [data, setData] = useState([]);
  const [filterList, setFilterList] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  //console.log(filterList);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fakeStoreApi.get("/products");
      //console.log(response.data);
      if (componentMounted) {
        setData(response.data);
        setFilterList(response.data);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  //const { id, title, } = products[0]; //destructuing the state from redux

  const renderList = filterList.map((product) => {
    const { id, title, image, price, category } = product; //destructuing t
    return (
      <div className="col-md-3 mb-4" key={id}>
        <div key={id} className="card h-100 text-center p-4">
          <img
            src={image}
            alt={title}
            className="card-img-top"
            height="250px"
          />

          <div className="card-body">
            <h5 className="card-title mb-0">{title.substring(0, 12)}...</h5>
            <p className="card-text lead fw-bold">$ {price}</p>
            <NavLink to={`/product/${id}`} className="btn btn-outline-dark">
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    );
  });

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilterList(updatedList);
    //console.log(setFilterList(updatedList));
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilterList(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing{" "}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
      </>
    );
  };
  return (
    <>
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder text-center">
                Latest Products
              </h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
      <div className="ui grid container">{renderList}</div>
    </>
  );
};
export default Product;
