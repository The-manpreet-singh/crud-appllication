import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

//create sychronus action create  into asychronus action creator using the redux middleware thunk
export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  console.log(response);
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

// return {
//   type: ActionTypes.FETCH_PRODUCTS,
//   payload: response,
// };
