//in this file, if we have multiple reducer, we need to combined all reducers here
import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import handleCart from "./handleCart";

const reducers = combineReducers({
  allProducts: productReducer, //set a key for allReducers like allProducts
  product: selectedProductReducer,
  handleCart,
});

export default reducers;
