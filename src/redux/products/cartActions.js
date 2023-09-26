import { ADD_PRODUCT } from "./cartTypes";
import { REMOVE_PRODUCT } from "./cartTypes";

export const addProduct = (product) => {
   return {
      type: ADD_PRODUCT,
      payload: product,
   };
};

export const removeProduct = (product) => {
   return {
      type: REMOVE_PRODUCT,
      payload: product,
   };
};
