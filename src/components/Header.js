import React from "react";
import Navbar from "./Navbar";
export const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            src="/assets/1.jpg"
            className="card-img"
            alt="..."
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="ui fixed menu">
    //   <div className="ui container center">
    //     <h1>Shop</h1>
    //   </div>
    // </div>
  );
};
