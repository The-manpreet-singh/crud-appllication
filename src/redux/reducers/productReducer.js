import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Man",
      category: "Software",
    },
  ],
};

//export const productReducer = (state, action) => {
//or we use destructuring for action
export const productReducer = (state= initialState, { type, payload }) => {
  //switch (action.type) {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
