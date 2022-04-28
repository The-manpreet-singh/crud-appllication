//in this file, if we have multiple reducer, we need to combined all reducers here
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer, //set a key for allReducers like allProducts
});

export default reducers;
