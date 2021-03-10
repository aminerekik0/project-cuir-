import {
  ADD_CART_ITEM,
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_SUCCESS,
  GET_CART_ITEMS,
  GET_CART_ITEMS_FAIL,
  GET_CART_ITEMS_SUCCESS,
} from "../constants/action-types";

const initialState = {
  loading: false,
  errors: null,
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case GET_ALL_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case GET_CART_ITEMS:
      return {
        ...state,
        loading: true,
      };
    case GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: payload,
      };
    case GET_CART_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartNumber: payload
      }
    default:
      return state;
  }
};
export default productReducer;
